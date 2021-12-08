import React, { useContext } from "react";
import {
  Link,
  Editable,
  EditableInput,
  EditablePreview,
  SkeletonCircle,
  SkeletonText,
  IconButton,
  Icon,
  Text
} from "@chakra-ui/react";
import { useClipboard } from "@chakra-ui/hooks";
import { Box, Flex, HStack } from "@chakra-ui/layout";
import Blockies from "react-blockies";
import { MdContentCopy, MdCheckCircle } from "react-icons/md";
import { RiExternalLinkFill } from "react-icons/ri";
import { Web3Context } from '../../contexts/Web3Provider';
import { useResolveEnsName } from '../../core/hooks/useResolveEnsName';

// changed value={account} to account={account}

/*
  ~ What it does? ~
  Displays an account with a blockie image and option to copy account
  ~ How can I use? ~
  <Address
    account={account}
    ensProvider={mainnetProvider}
    blockExplorer={blockExplorer}
    fontSize={fontSize}
  />
  ~ Features ~
  - Provide ensProvider={mainnetProvider} and your account will be replaced by ENS name
              (ex. "0xa870" => "user.eth")
  - Provide blockExplorer={blockExplorer}, click on account and get the link
              (ex. by default "https://etherscan.io/" or for xdai "https://blockscout.com/poa/xdai/")
  - Provide fontSize={fontSize} to change the size of account text
*/

const blockExplorerLink = (address: string, blockExplorer?: string) =>
  `${blockExplorer || "https://etherscan.io/"}${"address/"}${address}`;

function Address({ value, address, size = "long", blockExplorer, minimized = false, onChange, fontSize, blockiesScale }: { value: string, address: string, size?: "long" | "short", blockExplorer?: string, minimized?: boolean, onChange?: any, fontSize?: string, blockiesScale?: number }) {
  const { staticProvider } = useContext(Web3Context);
  const account = value || address;
  const ens = useResolveEnsName(staticProvider, address);
  const { hasCopied, onCopy } = useClipboard(account);

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
          <Blockies seed={account.toLowerCase()} size={8} scale={2} />
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
          color="white"
        >
          <RiExternalLinkFill />
          {displayAddress}
        </Link>
      </Flex>
    );
  }

  return (
    <HStack fontSize={fontSize ?? 28}>
      <Blockies seed={account.toLowerCase()} size={8} scale={blockiesScale ? blockiesScale / 7 : 5} />
      {text}
      <IconButton
        onClick={onCopy}
        aria-label="Copy Address"
        fontSize={fontSize}
        icon={hasCopied ? <Icon color="aqua.300" as={MdCheckCircle} /> : <MdContentCopy />}
      />
    </HStack>
  );
}

export default Address;