import React, { ReactNode } from "react";
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  Icon,
  Stack,
  Button,
} from "@chakra-ui/react";
import { products } from "data";
import NextLink from "next/link";

export default function MainEcosystemBrief() {
  const Feature = ({
    children,
    icon,
    title,
    href,
  }: {
    icon: ReactNode;
    title: string;
    children: ReactNode;
    href: string;
  }) => {
    return (
      <Flex>
        <Flex shrink={0}>
          <Flex
            alignItems="center"
            justifyContent="center"
            h={12}
            w={12}
            rounded="md"
            bg={useColorModeValue("brand.500")}
            color="white"
          >
            {icon}
          </Flex>
        </Flex>
        <Box ml={4}>
          <chakra.dt
            fontSize="lg"
            fontWeight="medium"
            lineHeight="6"
            color={useColorModeValue("gray.900")}
          >
            {title}
          </chakra.dt>
          <chakra.dd mt={2} color={useColorModeValue("gray.500", "gray.400")}>
            {children}
          </chakra.dd>
          <NextLink href={href} passHref>
            <Button
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              color={"white"}
              bg={"brand.400"}
              _hover={{
                bg: "brand.300",
              }}
              my={2}
            >
              Learn More
            </Button>
          </NextLink>
        </Box>
      </Flex>
    );
  };

  return (
    <Flex
      bg={useColorModeValue("#F9FAFB", "gray.600")}
      p={{ base: 8, md: 20 }}
      w="auto"
      justifyContent="center"
      alignItems="center"
    >
      <Box py={12} bg={useColorModeValue("white", "gray.800")} rounded="xl">
        <Box maxW="7xl" mx="auto" px={{ base: 4, lg: 8 }}>
          <Box textAlign={{ lg: "center" }}>
            <chakra.h1
              mt={2}
              fontSize={{ base: "3xl", sm: "4xl" }}
              lineHeight="8"
              fontWeight="extrabold"
              letterSpacing="tight"
              color={useColorModeValue("gray.900")}
            >
              A better way to improve your Sports Performance
            </chakra.h1>
            <chakra.p
              mt={4}
              maxW="2xl"
              fontSize="xl"
              mx={{ lg: "auto" }}
              color={useColorModeValue("gray.500", "gray.400")}
            >
              We offer solutions for all stages of your training and match
              performance.
            </chakra.p>
          </Box>

          <Box mt={10}>
            <Stack
              spacing={{ base: 10, md: 0 }}
              display={{ md: "grid" }}
              gridTemplateColumns={{ md: "repeat(2,1fr)" }}
              gridColumnGap={{ md: 8 }}
              gridRowGap={{ md: 10 }}
            >
              {products.map((product) => (
                <Feature
                  key={product.id}
                  title={product.name}
                  icon={
                    <Icon
                      boxSize={6}
                      aria-hidden="true"
                      as={product.icon ?? "div"}
                    />
                  }
                  href={`/${product.id}`}
                >
                  {product.description}
                </Feature>
              ))}
            </Stack>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}
