import { VStack, Button, Text, Link } from "@chakra-ui/react";
import React, { useContext, useState, useEffect } from "react";
import { ethers, utils } from "ethers";
import toast, { Toaster } from "react-hot-toast";
import { useWeb3React } from '@web3-react/core';

import { Web3Context } from "../../contexts/Web3Provider";
import { hexToString } from "../../core/helpers";
import NETWORKS from '../../core/networks';
import { ExternalLinkIcon } from '@chakra-ui/icons';

function Faucet({ ...others }: any) {
  const { account, } = useContext(Web3Context);
  const { chainId, library } = useWeb3React();

  const [faucetAddress, setFaucetAddress] = useState("");
  const [faucetBalance, setFaucetBalance] = useState("");
  const [faucetSigner, setFaucetSigner] =
    useState<ethers.providers.JsonRpcSigner>();

  useEffect(() => {
    const getFaucetAddress = async () => {
      if (library) {
        const _faucetAddress = await library.listAccounts();
        setFaucetAddress(_faucetAddress[0]);

        const signer = await library.getSigner();
        // const address = await signer.getAddress();
        setFaucetSigner(signer);

        getFaucetBalance();
      }
    };
    getFaucetAddress();
  }, []);

  const getFaucetBalance = async () => {
    if (faucetSigner) {
      const _balance = await faucetSigner.getBalance();
      setFaucetBalance(hexToString(_balance));
    }
  };

  //   const notify = () => toast("Receiving 0.01 eth from faucet 😀");

  const faucet = async () => {
    if (faucetSigner) {
      const tx = await faucetSigner.sendTransaction({
        to: account,
        value: utils.parseEther("0.01"),
      });

      tx.wait();

      const bal = getFaucetBalance();
      toast.promise(
        bal,
        {
          loading: "receiving...",
          success: "Received 0.01 eth from faucet 😀",
          error: "Error when fetching",
        },
        {
          duration: 2000,
          position: "top-right",
        }
      );
    }
  };

  const network = chainId && (NETWORKS as any)[chainId.toString()];

  return (
    <>
      <VStack
        style={{ margin: 8, left: 0, bottom: 0, position: "fixed" }}
        layerStyle="no-border-card"
        align={"start"}
        {...others}
      >
        <Text>Faucet</Text>
        <Text textStyle="small">{faucetAddress}</Text>
        {
          faucetBalance &&
          <Text textStyle="small">
            {faucetBalance}{" "}
            {network.symbol ?? "Native tokens"}
          </Text>
        }
        {chainId === 31337
          ? <Button onClick={faucet}>Get some eth</Button>
          : network && <Link href={network.faucet} target="_blank" rel="noopener noreferrer">
            <Button leftIcon={<ExternalLinkIcon />}>
              Get faucet tokens
            </Button>
          </Link>
        }
      </VStack>
      <Toaster
        toastOptions={{
          style: {
            border: "1px solid #4C13EC",
            padding: "8px",
            color: "#fff",
            background: "#18112C",
          },
        }}
      />
    </>
  );
}

export default Faucet;
