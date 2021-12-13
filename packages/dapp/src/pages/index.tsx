import { Button, HStack, Text, VStack } from "@chakra-ui/react";
import { Title } from "@scaffold-eth/ui";
import ContractFields from "components/custom/ContractFields";
import React, { useContext, useState, useEffect } from "react";
import Faucet from "../components/custom/Faucet";
import { Web3Context } from "../contexts/Web3Provider";
import useCustomColor from "../core/hooks/useCustomColor";

const Home = () => {
  const { account, contracts, provider, staticProvider } =
    useContext(Web3Context);
  const { coloredText, accentColorScheme } = useCustomColor();
  const [purpose, setPurpose] = useState("");

  const readLog = async () => {
    if (provider && account) {
      const res = await provider?.getBalance(account);
      console.log(`purpose`, res);
    }
  };

  useEffect(() => {
    // const getFaucetAddress = async () => {
    //   if (staticProvider) {
    //     const _faucetAddress = await staticProvider.listAccounts();
    //     setFaucetAddress(_faucetAddress[0]);
    //     const signer = await staticProvider.getSigner();
    //     // const address = await signer.getAddress();
    //     setFaucetSigner(signer);
    //     const _balance = await signer.getBalance();
    //     setFaucetBalance(utils.formatEther(_balance.toString()));
    //     getFaucetBalance();
    //   }
    // };
    // getFaucetAddress();
  }, [staticProvider]);

  return (
    <VStack>
      <HStack align="center" w="full">
        <Title>Title</Title>
      </HStack>
      <Text textStyle="h2">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos
        esse rerum doloremque eligendi tenetur reprehenderit consequuntur
        adipisci officia amet quam architecto, commodi deserunt neque debitis
        porro non iusto asperiores molestiae!
      </Text>
      <Text color={coloredText}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos
        esse rerum doloremque eligendi tenetur reprehenderit consequuntur
        adipisci officia amet quam architecto, commodi deserunt neque debitis
        porro non iusto asperiores molestiae!
      </Text>
      <HStack>
        <Text>{purpose}</Text>
        <Button onClick={readLog}>Read</Button>
      </HStack>
      <ContractFields />
      <Faucet />
    </VStack>
  );
};

export default Home;
