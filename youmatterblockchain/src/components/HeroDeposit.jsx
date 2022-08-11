import React from "react";
import { useEthers, useEtherBalance } from "@usedapp/core";
import { formatEther } from "@ethersproject/units";
import {
  Stack,
  Heading,
  Button,
  Container,
  Image,
  Flex,
  Box,
  Link,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import Doctor from "../assets/deposit.svg";
import initWallet from "../wallet";


export default function ConnectButton() {
  const { activateBrowserWallet, account } = useEthers();
  const etherBalance = useEtherBalance(account);

const ConnectButton = () => {
  let navigate = useNavigate();

  const connectWallet = async () => {
    await initWallet();
    navigate("/Deposit");
  };

  const makedeposit = async () => {
    await initWallet();
    navigate("/Deposit");
  };


  function handleConnectWallet() {
    activateBrowserWallet();
  }

  return account ? (
    <Box
      display="flex"
      alignItems="center"
      background="gray.700"
      borderRadius="xl"
      py="0"
    >
      <Box px="3">
        <Text color="white" fontSize="md">
          {etherBalance && parseFloat(formatEther(etherBalance)).toFixed(3)} ETH
        </Text>
      </Box>
      <Button
        bg="gray.800"
        border="1px solid transparent"
        _hover={{
          border: "1px",
          borderStyle: "solid",
          borderColor: "blue.400",
          backgroundColor: "gray.700",
        }}
        borderRadius="xl"
        m="1px"
        px={3}
        height="38px"
      >
        <Text color="white" fontSize="md" fontWeight="medium" mr="2">
          // check account is defined and then slice the string
          {account &&
            `${account.slice(0, 6)}...${account.slice(
              account.length - 4,
              account.length
            )}`}
        </Text>
      </Button>
    </Box>
  ) : (
    <Button onClick={connectWallet}>Connect to a wallet</Button>
  );
}

  return (
    <Container maxW="container.xl">
      <Stack direction={{ base: "column", md: "row" }} py={8}>
        <Flex flex="1">
          <Stack justifyContent="center" gap={8}>
            <Box maxW="80ch">
              <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
                Saveguarding maternal funds through the blockchain
              </Heading>
            </Box>
            <Stack direction="row" gap={100}>
              {/* <Button colorScheme="blue" p={4} onClick={handleConnectWallet}>
                Deposit Here
              </Button> */}
              <Button
                as={Link}
                variant="link"
                href="https:youmatter.co.ke"
              >
                Learn More About our Banking
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex="1" pt={{ base: 4, md: 0 }}>
          <Image src={Doctor} alt="doctor" />
        </Flex>
      </Stack>
    </Container>
  );
};


