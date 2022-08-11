import React from "react";
import { Center, Text, Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Center py={5} borderTop="1px" borderColor="gray.100">
      <Text>
        Made with ❤️ with Christopher and Emmanuel |{" "}
        <Link
          href="https://github.com"
          isExternal
          color="blue.500"
        >
          Github Repo
        </Link>
      </Text>
    </Center>
  );
};

export default Footer;
