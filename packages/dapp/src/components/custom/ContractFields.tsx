import { Button, HStack, Input, Text, VStack } from "@chakra-ui/react";
import ABIS from "@scaffold-eth/hardhat-ts/hardhat_contracts.json";
import React, { useContext, useEffect, useState } from "react";
import { Web3Context } from "../../contexts/Web3Provider";
import useCustomColor from "../../core/hooks/useCustomColor";
import NETWORKS from "../../core/networks";
import { YourContract } from "@scaffold-eth/hardhat-ts/generated/contract-types/YourContract";
import { useWeb3React } from '@web3-react/core';

type Block = {
  inputs?: Array<Object>;
  outputs?: Array<Object>;
  name?: string;
  stateMutability?: string;
  type: string;
};

function ContractFields({ ...others }: any) {
  const { contracts } = useContext(Web3Context);
  const { chainId } = useWeb3React();
  const [abi, setAbi] = useState([]);
  const { coloredText } = useCustomColor();
  const [purpose, setPurpose] = useState("");
  const [purposeInput, setPurposeInput] = useState("");
  const [yourContract, setYourContract] = useState<YourContract>();

  const readPurpose = async () => {
    if (yourContract) {
      const res = await yourContract.purpose();
      setPurpose(res);
    }
  };

  const writePurpose = async () => {
    if (yourContract) {
      const transaction = await yourContract.setPurpose(purposeInput);
      await transaction.wait();
      await readPurpose();
    }
  };

  useEffect(() => {
    if (chainId && contracts) {
      const strChainId = chainId.toString() as keyof typeof NETWORKS;
      const network = NETWORKS[strChainId];
      const abis = ABIS as Record<string, any>;
      if (abis[strChainId]) {
        const abi = abis[strChainId][network.name].contracts.YourContract.abi;
        setAbi(abi);
        setYourContract(contracts.yourContract);
      }
    }
  }, [chainId, contracts]);

  return (
    <VStack
      bg="spacelightalpha"
      p="8"
      h="lg"
      borderRadius="base"
      spacing="4"
      align="start"
      {...others}
    >
      <Text textStyle="h1">Your Contract</Text>
      <Text textStyle="small">
        yarn chain, deploy in /hardhat and yarn dev in dapp.{" "}
        * make sure you are connected to localhost
      </Text>

      {abi &&
        abi.map((el: Block) => {
          if (el.type === "function" && el.inputs?.length !== 0) {
            return (
              <HStack>
                <Text>{el.name}</Text>
                <Input
                  value={purposeInput}
                  onChange={(e) => setPurposeInput(e.target.value)}
                />
                <Button onClick={() => el.name && writePurpose()}>Call</Button>
              </HStack>
            );
          }
          if (el.type === "function" && el.outputs?.length !== 0) {
            return (
              <HStack>
                <Text>{el.name}</Text>
                <Text color={coloredText}>{purpose}</Text>
                <Button onClick={readPurpose}>Call</Button>
              </HStack>
            );
          }
        })}
      <Button onClick={() => console.log(abi)}>Get abi</Button>
    </VStack>
  );
}

export default ContractFields;
