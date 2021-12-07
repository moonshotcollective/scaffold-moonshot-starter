import {
  Box,
  Link,
  Button,
  Heading,
  Spinner,
  Text,
  Input,
  FormControl,
  FormLabel,
  VStack,
} from "@chakra-ui/react";
import copy from "copy-to-clipboard";
import { useRouter } from "next/router";
import { useCallback, useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import Card from "../../../components/custom/Card";
import NotConnectedCard from "../../../components/custom/NotConnectedCard";
import CenteredFrame from "../../../components/layout/CenteredFrame";
import { Web3Context } from "../../../contexts/Web3Provider";
import { findGitHub } from "../../../core/ceramic";
import { createGitHub } from "../../../core/ceramic/identity-link";

function AddGitHubAccountScreen() {
  const { self, account, identityLink } = useContext(Web3Context);
  const [challengeLoading, setChallengeLoading] = useState<boolean>(false);
  const [challenge, setChallenge] = useState<string | null>(null);
  const [username, setUsername] = useState<string | null>(null);
  const [verifyLoading, setVerifyLoading] = useState<boolean>(false);
  const router = useRouter();

  const copyMessage = useCallback(() => {
    if (self == null || typeof username !== "string" || challengeLoading) {
      return;
    }

    const toastId = toast.loading("Loading challenge...");
    setChallengeLoading(true);

    identityLink.requestGitHub(self.id, username).then(
      (userChallenge: string) => {
        setChallenge(userChallenge);
        if (copy(self.id)) {
          toast.success("Copied to clipboard!", { id: toastId });
        } else {
          toast.error("Failed to copy to clipboard", { id: toastId });
        }
        setChallengeLoading(false);
      },
      (err: Error) => {
        toast.error(`Failed to get challenge: ${err.message}`, { id: toastId });
        setChallengeLoading(false);
      }
    );
  }, [challengeLoading, username, self, identityLink]);

  const verify = useCallback(() => {
    const handleAddGithubAttestation = async (
      githubUsername: string,
      challengeCode: string
    ) => {
      let [attestation, accounts] = await Promise.all([
        (async () => {
          const jws = await self.client.ceramic.did?.createJWS({
            challengeCode,
          });
          if (!jws) {
            throw new Error("Not authorized");
          }
          return identityLink.confirmGitHub(jws);
        })(),
        self.get("alsoKnownAs"),
      ]);

      console.log({ attestation, accounts });

      const existing = accounts ? findGitHub(accounts, githubUsername) : null;
      if (existing == null) {
        accounts = {
          accounts: [createGitHub(githubUsername, attestation)],
        };
      } else {
        existing.attestations = existing.attestations ?? [];
        existing.attestations.push({ "did-jwt-vc": attestation });
      }
      console.log({ accounts });
      await self.set("alsoKnownAs", accounts);
      return accounts;
    };

    if (
      self == null ||
      challenge == null ||
      typeof username !== "string" ||
      verifyLoading
    ) {
      return;
    }

    const toastId = toast.loading("Verifying...");
    setVerifyLoading(true);

    handleAddGithubAttestation(username, challenge).then(
      () => {
        toast.success("Attestation added!", { id: toastId });
        setVerifyLoading(false);
        return router.push("/profile/edit");
      },
      (err: Error) => {
        toast.error(`Failed to verify or add attestation: ${err.message}`, {
          id: toastId,
        });
        setVerifyLoading(false);
      }
    );
  }, [challenge, router, self, username, verifyLoading, identityLink]);

  return self && account ? (
    <Box>
      <Toaster />
      <Heading margin={{ horizontal: "none", vertical: "small" }}>
        Verify GitHub account
      </Heading>
      <FormControl w="fit-content">
        <FormLabel htmlFor="name">Github username</FormLabel>
        <Input
          placeholder="Your Github username"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
        />
      </FormControl>
      <Box margin={{ top: "medium" }}>
        <VStack align="left">
          <Box>
            <Text margin={{ bottom: "small" }} weight="bold">
              Step 1
            </Text>
            <Text color="neutral-2">
              Click this button to copy the verification message.
            </Text>
          </Box>
          <Box>
            {challengeLoading ? (
              <Button disabled icon={<Spinner />} />
            ) : (
              <Button disabled={verifyLoading} onClick={copyMessage}>
                Copy
              </Button>
            )}
          </Box>
        </VStack>
        <VStack align="left">
          <Box>
            <Text margin={{ bottom: "small" }} weight="bold">
              Step 2
            </Text>
            <Text color="neutral-2">
              Click this button to open a new window and create a Gist file.
            </Text>
          </Box>
          <Box>
            <Link
              href="https://gist.github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>Open</Button>
            </Link>
          </Box>
        </VStack>
        <VStack align="left">
          <Text margin={{ bottom: "small" }} weight="bold">
            Step 3
          </Text>
          <Text color="neutral-2">
            Paste your DID in the Gist and save as public.
          </Text>
        </VStack>
        <VStack align="left">
          <Box>
            <Text margin={{ bottom: "small" }} weight="bold">
              Step 4
            </Text>
            <Text color="neutral-2">
              Return to this page and verify your account by clicking this
              button.
            </Text>
          </Box>
          <Box>
            {verifyLoading ? (
              <Button disabled icon={<Spinner />} />
            ) : (
              <Button disabled={challenge == null} onClick={verify}>
                Verify
              </Button>
            )}
          </Box>
        </VStack>
      </Box>
    </Box>
  ) : (
    <CenteredFrame>
      <Card h="full" w="2xl" border="solid 1px red">
        <NotConnectedCard />
      </Card>
    </CenteredFrame>
  );
}

export default AddGitHubAccountScreen;
