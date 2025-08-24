import React, { ReactNode } from "react";

import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  Icon,
  SimpleGrid,
  Stack,
  GridItem,
} from "@chakra-ui/react";

export default function MainUSP() {
  const Feature = ({
    children,
    title,
  }: {
    title: string;
    children: ReactNode;
  }) => {
    return (
      <Flex>
        <Flex shrink={0}>
          <Icon
            boxSize={5}
            mt={1}
            mr={2}
            color={useColorModeValue("brand.500", "brand.300")}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </Icon>
        </Flex>
        <Box ml={4}>
          <chakra.dt
            fontSize="lg"
            fontWeight="bold"
            lineHeight="6"
            color={useColorModeValue("gray.900", "white")}
          >
            {title}
          </chakra.dt>
          <chakra.dd mt={2} color={useColorModeValue("gray.500", "gray.400")}>
            {children}
          </chakra.dd>
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
      <Box
        shadow="xl"
        bg={useColorModeValue("white", "gray.800")}
        px={8}
        py={20}
        mx="auto"
      >
        <SimpleGrid
          alignItems="center"
          columns={{ base: 1, lg: 3 }}
          spacingY={{ base: 10, lg: 32 }}
          spacingX={{ base: 10, lg: 24 }}
        >
          <Box alignSelf="start">
            <chakra.h2 color={useColorModeValue("brand.500", "gray.500")} fontWeight="semibold" textTransform="uppercase" letterSpacing="wide">
              Built for Modern Academies
            </chakra.h2>
            <chakra.h2
              mb={3}
              fontSize={{ base: "3xl", md: "4xl" }}
              fontWeight="extrabold"
              textAlign={{ base: "center", sm: "left" }}
              color={useColorModeValue("black", "white")}
              lineHeight="shorter"
              letterSpacing="tight"
            >
              All-in-one platform
            </chakra.h2>
            <chakra.p
              mb={6}
              fontSize={{ base: "lg", md: "xl" }}
              color={useColorModeValue("gray.600", "gray.500")}
            >
              AI insights, operations, curriculum, and payments — deeply integrated
              so you can run and grow with clarity.
            </chakra.p>
          </Box>
          <GridItem colSpan={2}>
            <Stack
              spacing={{ base: 10, md: 0 }}
              display={{ md: "grid" }}
              gridTemplateColumns={{ md: "repeat(2,1fr)" }}
              gridColumnGap={{ md: 8 }}
              gridRowGap={{ md: 10 }}
            >
              <Feature title="AI Integrated Analysis">
                Video-driven, automated insights for players and coaches with
                actionable metrics and benchmarks.
              </Feature>
              <Feature title="Digital Academy Infrastructure">
                Schedules, rosters, curriculum, attendance, and performance tracking
                in a single, secure system.
              </Feature>
              <Feature title="Payment Automation">
                Standardised, compliant billing and collections with Razorpay, IDFC FIRST Bank,
                HDFC Bank and Zoho Payments.
              </Feature>
              <Feature title="WhatsApp Operations">
                Seamless communication for academies, players, and parents — daily ops that just work.
              </Feature>
            </Stack>
          </GridItem>
        </SimpleGrid>
      </Box>
    </Flex>
  );
}
