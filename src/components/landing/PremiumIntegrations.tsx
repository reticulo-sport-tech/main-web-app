import { Box, Container, Heading, HStack, Tag, Text, VStack, useColorModeValue } from "@chakra-ui/react";

export default function PremiumIntegrations() {
  const cardBg = useColorModeValue("white", "gray.800");
  const cardBorder = useColorModeValue("blackAlpha.100", "whiteAlpha.200");
  const partners = [
    { name: "Razorpay", role: "Payments Infrastructure" },
    { name: "IDFC FIRST Bank", role: "Banking Partner" },
    { name: "HDFC Bank", role: "Banking Partner" },
    { name: "Zoho Payments", role: "Automation & Billing" },
  ];

  return (
    <Box py={{ base: 12, md: 20 }}>
      <Container maxW="6xl">
        <Heading size="lg" textAlign="center">Trusted Integrations</Heading>
        <Text mt={2} textAlign="center" color={useColorModeValue("gray.600", "gray.300")}>Best-in-class financial and operational partners.</Text>
        <HStack spacing={4} mt={6} wrap="wrap" justify="center">
          {partners.map((p) => (
            <VStack key={p.name} spacing={1} borderWidth="1px" borderColor={cardBorder} bg={cardBg} rounded="xl" px={4} py={3} minW="220px" boxShadow="largeSoft">
              <Text fontWeight="semibold">{p.name}</Text>
              <Tag colorScheme="purple" variant="subtle">{p.role}</Tag>
            </VStack>
          ))}
        </HStack>
      </Container>
    </Box>
  );
}

