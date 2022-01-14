import {
  Container,
  Icon,
  Stack,
  Flex,
  Heading,
  Text,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";

import { Logo } from "@/components/Logo";
import { SEOWrapper } from "@/components/SEO";

export const NotFound = () => {
  return (
    <SEOWrapper title="Page Not Found">
      <Flex align={"center"} justify={"center"} h={"100vh"} w={"full"}>
        <Stack
          as={Container}
          bg={useColorModeValue("gray.50", "gray.900")}
          rounded={"xl"}
          p={8}
          spacing={6}
          maxW={"lg"}
          align={"center"}
          textAlign={"center"}
        >
          <Icon as={Logo} w={10} h={10} />
          <Stack spacing={2}>
            <Heading>Page not found</Heading>
            <Text>
              This page was not found. You may have mistyped the address or the
              page may have moved.
            </Text>
          </Stack>
          <Flex>
            <NextLink href={"/"} passHref>
              <Button
                as={"a"}
                colorScheme={"brand"}
                rounded={"full"}
                bg={"brand.400"}
                _hover={{ bg: "brand.500" }}
              >
                Take me to the home page
              </Button>
            </NextLink>
          </Flex>
        </Stack>
      </Flex>
    </SEOWrapper>
  );
};

export default NotFound;
