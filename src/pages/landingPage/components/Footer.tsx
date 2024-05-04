import * as React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

const Footer: React.FC = () => {
  return (
    <Box as="footer" py="4">
      <Flex direction="column" align="center">
        <Text fontSize="sm" my="20px">
          © 2024 Group 1. All rights reserved.
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
