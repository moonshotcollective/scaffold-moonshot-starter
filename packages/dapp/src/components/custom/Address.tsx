import { useClipboard } from "@chakra-ui/hooks";
import { Box, Flex, HStack } from "@chakra-ui/layout";
import {
  Button,
  Editable,
  EditableInput,
  EditablePreview,
  Icon,
  IconButton,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SkeletonCircle,
  SkeletonText,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import { useWeb3React } from '@web3-react/core';
import useCustomColor from "core/hooks/useCustomColor";
import React, { useContext } from "react";
import Blockies from "react-blockies";
import { MdCheckCircle, MdContentCopy } from "react-icons/md";
import { RiExternalLinkFill } from "react-icons/ri";
import { Web3Context } from "../../contexts/Web3Provider";
import { useResolveEnsName } from "../../core/hooks/useResolveEnsName";

const blockExplorerLink = (address: string, blockExplorer?: string) =>
  `${blockExplorer || "https://etherscan.io/"}${"address/"}${address}`;

function Address({
  value,
  address,
  logout,
  size = "long",
  blockExplorer,
  minimized = false,
  onChange,
  fontSize,
  blockiesScale,
}: {
  value: string;
  address: string;
  logout?: any;
  size?: "long" | "short";
  blockExplorer?: string;
  minimized?: boolean;
  onChange?: any;
  fontSize?: string;
  blockiesScale?: number;
}) {
  const { library } = useWeb3React();
  const account = value || address;
  const ens = useResolveEnsName(library, address);
  const { hasCopied, onCopy } = useClipboard(account);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { coloredText } = useCustomColor();
  if (!account) {
    return (
      <Box padding="6" as="span">
        <SkeletonCircle size="10" />
        <SkeletonText mt="4" noOfLines={1} spacing="4" />
      </Box>
    );
  }

  let displayAddress = account.substr(0, 6);

  const ensSplit = ens && ens.split(".");
  const validEnsCheck = ensSplit && ensSplit[ensSplit.length - 1] === "eth";
  if (validEnsCheck) {
    displayAddress = ens;
  } else if (size === "short") {
    displayAddress += "..." + account.substr(-4);
  } else if (size === "long") {
    displayAddress = account;
  }

  const etherscanLink = blockExplorerLink(account, blockExplorer);
  if (minimized) {
    return (
      <Box as="span" verticalAlign="middle">
        <Link target="_blank" href={etherscanLink} rel="noopener noreferrer">
          <Blockies
            seed={account.toLowerCase()}
            className="blockies"
            size={8}
            scale={2}
          />
        </Link>
      </Box>
    );
  }

  let text;
  if (onChange) {
    text = (
      <Editable placeholder={account}>
        <EditablePreview width="100%" />
        <Link target="_blank" href={etherscanLink} rel="noopener noreferrer">
          <EditableInput value={displayAddress} onChange={onChange} />
        </Link>
      </Editable>
    );
  } else {
    text = (
      <Flex alignItems="center" justifyContent="center" flexGrow={1}>
        <Link
          display="flex"
          alignItems="center"
          justifyContent="center"
          border="none"
          textOverflow={displayAddress.startsWith("0x") ? "ellipsis" : "unset"}
          href={etherscanLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiExternalLinkFill />
          {displayAddress}
        </Link>
      </Flex>
    );
  }

  return (
    <HStack
      layerStyle="solid-card"
      py="1"
      px="2"
      _hover={{ bg: "lighten(0.2)" }}
      fontSize={fontSize ?? 28}
    >
      <Flex _hover={{ cursor: "pointer" }} onClick={onOpen}>
        <Blockies
          className="blockies"
          seed={account.toLowerCase()}
          size={6}
          scale={blockiesScale ? blockiesScale / 7 : 4.9}
        />
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Account</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Connected with MetaMask
            <Text textStyle="small" color={coloredText}>
              You can copy the address or view on explorer
            </Text>
            <HStack
              my="8"
              layerStyle="solid-card"
              py="1"
              px="2"
              justify="start"
            >
              {text}
              <IconButton
                size="sm"
                variant="ghost"
                onClick={onCopy}
                aria-label="Copy Address"
                fontSize={fontSize}
                icon={
                  hasCopied ? (
                    <Icon color="aqua.300" as={MdCheckCircle} />
                  ) : (
                    <MdContentCopy />
                  )
                }
              />
            </HStack>
          </ModalBody>

          <ModalFooter>
            <Button w="full" onClick={logout}>
              Log out
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {text}
      <IconButton
        size="sm"
        variant="ghost"
        onClick={onCopy}
        aria-label="Copy Address"
        fontSize={fontSize}
        icon={
          hasCopied ? (
            <Icon color="aqua.300" as={MdCheckCircle} />
          ) : (
            <MdContentCopy />
          )
        }
      />
    </HStack>
  );
}

export default Address;
