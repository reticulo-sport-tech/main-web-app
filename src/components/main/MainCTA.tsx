import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  AspectRatio,
  Image,
} from "@chakra-ui/react";

export default function MainCTA() {
  return (
    <Container maxW={"5xl"}>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 8, md: 16 }}
      >
        <Heading fontWeight={700} fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }} lineHeight={"110%"}>
          AI-Integrated Sports Platform
          <Text as={"span"} color={"brand.400"}> for Academies & Athletes</Text>
        </Heading>
        <Text color={"gray.500"} maxW={"3xl"}>
          Reticulo unifies AI performance analysis, digital academy infrastructure, automated payments,
          and WhatsApp-driven operations — a clean, modern stack built for scale.
        </Text>
        {/* <Stack spacing={6} direction={"row"}>
          <NextLink href="/contact-us">
            <Button
              rounded={"full"}
              px={6}
              colorScheme={"brand"}
              bg={"brand.400"}
              _hover={{ bg: "brand.500" }}
            >
              Get started
            </Button>
          </NextLink> 

          <NextLink href="/contact-us">
            <Button rounded={"full"} px={6}>
              Learn more
            </Button>
          </NextLink>
        </Stack> */}
        <Flex w={"full"}>
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image
              alt="Reticulo AI Sports Platform"
              title="Reticulo AI Sports Platform"
              src="/sports-analytics.png"
              style={{
                borderRadius: "2%",
              }}
            />
          </AspectRatio>
        </Flex>
      </Stack>
    </Container>
  );
}
