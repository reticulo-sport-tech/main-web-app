import { Box, Button, Container, Flex, Heading, HStack, Icon, Stack, Tag, Text, useColorModeValue } from "@chakra-ui/react";
import type { BoxProps } from "@chakra-ui/react";
import { IoFlashOutline, IoShieldCheckmarkOutline } from "react-icons/io5";
import NextLink from "next/link";

const BgBlob = (props: BoxProps) => (
  <Box
    position="absolute"
    inset={0}
    filter="blur(60px)"
    opacity={useColorModeValue(0.6, 0.4)}
    pointerEvents="none"
    {...props}
  />
);

export default function PremiumHero() {
  const gradientText = useColorModeValue(
    "linear-gradient(90deg, #2563EB 0%, #7C3AED 100%)",
    "linear-gradient(90deg, #60A5FA 0%, #A78BFA 100%)"
  );
  const surface = useColorModeValue("white", "gray.800");
  const border = useColorModeValue("gray.200", "whiteAlpha.200");

  return (
    <Box position="relative" py={{ base: 10, md: 20 }} overflow="hidden">
      <BgBlob bgGradient="radial(700px 300px at 10% 10%, #C7D2FE, transparent), radial(700px 300px at 90% 20%, #DDD6FE, transparent)" />
      <Container maxW="6xl" position="relative">
        <Stack align="center" spacing={{ base: 8, md: 10 }} textAlign="center">
          <HStack spacing={3}>
            <Tag size="md" colorScheme="purple" variant="subtle">New Direction</Tag>
            <HStack color={useColorModeValue("gray.600", "gray.300")}
              fontSize="sm">
              <Icon as={IoShieldCheckmarkOutline} />
              <Text>Enterprise-grade privacy & security</Text>
            </HStack>
          </HStack>

          <Heading
            as="h1"
            size="2xl"
            lineHeight={1.1}
            maxW="4xl"
            bgClip="text"
            bgGradient={gradientText}
          >
            AI-Integrated Sports Platform for Modern Academies
          </Heading>
          <Text maxW="3xl" color={useColorModeValue("gray.600", "gray.300")} fontSize={{ base: "md", md: "lg" }}>
            Clean, premium infrastructure that unifies AI performance analysis, digital academy
            operations, automated payments, and WhatsApp-first workflows — built for players,
            coaches and operators.
          </Text>

          <HStack spacing={4}>
            <Button as={NextLink} href="/contact-us" colorScheme="purple" size="lg" rightIcon={<Icon as={IoFlashOutline} />}>
              Get a Demo
            </Button>
            <Button as={NextLink} href="/about-us" variant="ghost" size="lg">
              Learn More
            </Button>
          </HStack>

          <Flex w="full" justify="center">
            <Box
              w={{ base: "full", md: "80%" }}
              bg={surface}
              borderWidth="1px"
              borderColor={border}
              rounded="2xl"
              p={{ base: 4, md: 6 }}
              boxShadow="largeSoft"
            >
              <Box
                rounded="xl"
                h={{ base: "180px", md: "360px" }}
                bgGradient={useColorModeValue(
                  "linear(to-r, purple.50, blue.50)",
                  "linear(to-r, purple.900, blue.900)"
                )}
              />
            </Box>
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
}
