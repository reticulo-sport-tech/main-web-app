import { Box, Button, Container, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";

export default function PremiumCTA() {
  return (
    <Box py={{ base: 12, md: 20 }} bgGradient={useColorModeValue("linear(to-r, purple.50, blue.50)", "linear(to-r, purple.900, blue.900)")}>
      <Container maxW="6xl" textAlign="center">
        <Heading size="lg" color={useColorModeValue("gray.800", "white")}>Experience a premium, unified sports platform</Heading>
        <Text mt={2} color={useColorModeValue("gray.700", "gray.300")}>Book a live demo and explore AI insights, academy operations and automated billing — all in one place.</Text>
        <Button as={NextLink} href="/contact-us" size="lg" colorScheme="purple" mt={6}>Book a Demo</Button>
      </Container>
    </Box>
  );
}

