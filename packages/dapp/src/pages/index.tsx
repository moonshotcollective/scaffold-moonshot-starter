import { RepeatIcon } from "@chakra-ui/icons";
import { HStack, IconButton, Text, VStack } from "@chakra-ui/react";
import { Title } from "@scaffold-eth/ui";
import ContractFields from "components/custom/ContractFields";
import React, { useContext, useEffect, useState } from "react";
import Faucet from "../components/custom/Faucet";
import { Web3Context } from "../contexts/Web3Provider";
import { hexToString } from "../core/helpers";
import useCustomColor from "../core/hooks/useCustomColor";

const Home = () => {
  const { account, provider, staticProvider } = useContext(Web3Context);
  const { coloredText } = useCustomColor();
  const [yourBalance, setYourBalance] = useState("");

  const getEthBalance = async () => {
    if (provider && account) {
      const res = await provider?.getBalance(account);
      const balance = hexToString(res);
      setYourBalance(balance);
      // console.log(`balance`, balance);
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
    getEthBalance();
  }, [account]);

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
        <Text>Your Balance: {yourBalance}Ξ</Text>
        <IconButton
          onClick={getEthBalance}
          aria-label="refresh"
          icon={<RepeatIcon />}
        />
      </HStack>
      <ContractFields />
      <Faucet />
    </VStack>
  );
};

export default Home;
