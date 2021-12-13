import { VStack, Button, Text } from "@chakra-ui/react";
import { Web3Context } from "../../contexts/Web3Provider";
import React, { useContext, useState, useEffect } from "react";
import { ethers, utils } from "ethers";
import toast, { Toaster } from "react-hot-toast";

function Faucet({ ...others }: any) {
  const { account, staticProvider } = useContext(Web3Context);
  const [faucetAddress, setFaucetAddress] = useState("");
  const [faucetBalance, setFaucetBalance] = useState("");
  const [faucetSigner, setFaucetSigner] =
    useState<ethers.providers.JsonRpcSigner>();

  useEffect(() => {
    const getFaucetAddress = async () => {
      if (staticProvider) {
        const _faucetAddress = await staticProvider.listAccounts();
        setFaucetAddress(_faucetAddress[0]);

        const signer = await staticProvider.getSigner();
        // const address = await signer.getAddress();
        setFaucetSigner(signer);

        const _balance = await signer.getBalance();
        setFaucetBalance(utils.formatEther(_balance.toString()));

        getFaucetBalance();
      }
    };
    getFaucetAddress();
  }, [staticProvider]);

  const getFaucetBalance = async () => {
    if (faucetSigner) {
      const _balance = await faucetSigner.getBalance();
      setFaucetBalance(utils.formatEther(_balance.toString()));
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
        <Text textStyle="small">{faucetBalance}</Text>
        <Button onClick={faucet}>Get some eth</Button>
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
