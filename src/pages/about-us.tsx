import { AboutUsSection } from "@/components/AboutUsSection";
import {
  Box,
  Button,
  chakra,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import { FeatureType, ItemPlacement } from "data/types";

export default function AboutUs() {
  return (
    <Box pb={8}>
      <Stack
        direction={{ base: "column", md: "row" }}
        my={4}
        bg={useColorModeValue("gray.300", "gray.700")}
      >
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={6} w={"full"} maxW={"lg"}>
            <Heading fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}>
              <Text as={"span"}>
                Reticulo Sport Technology is the technology that players,
                coaches and academies rely on to improve their sports
                performance
              </Text>{" "}
            </Heading>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}></Text>
            <Stack direction={{ base: "column", md: "row" }} spacing={4}>
              <Button
                rounded={"full"}
                bg={"brand.400"}
                color={"white"}
                _hover={{
                  bg: "brand.500",
                }}
              >
                See all openings
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={"Login Image"}
            objectFit={"cover"}
            src={
              "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            }
          />
        </Flex>
      </Stack>
      <Box px={4} pt={16} mx="auto">
        <Box
          w={{ base: "full", md: 11 / 12, xl: 8 / 12 }}
          textAlign={{ base: "left", md: "center" }}
          mx="auto"
        >
          <chakra.h1
            mb={3}
            fontSize={{ base: "3xl", md: "4xl" }}
            fontWeight={{ base: "bold", md: "extrabold" }}
            color={useColorModeValue("gray.900", "gray.100")}
            lineHeight="shorter"
          >
            About Reticulo Sport Technology
          </chakra.h1>
          <chakra.p
            mb={6}
            fontSize={{ base: "lg", md: "xl" }}
            color="gray.500"
            lineHeight="base"
          >
            Our ecosystem is the only fully featured and integrated techonology
            which helps you improve your performance.
          </chakra.p>
        </Box>
      </Box>

      <AboutUsSection
        name="Our Philosophy"
        description={`We’re on a mission to change how we think of sport analysis and
        bring ground breaking technologies to help improving sports in
        general`}
        featurePlacement={ItemPlacement.RIGHT}
        featureType={FeatureType.IMAGE}
        featureUrl="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
      />

      <AboutUsSection
        name="Why Us"
        description={`We’re on a mission to change how we think of sport analysis and
        bring ground breaking technologies to help improving sports in
        general`}
        featurePlacement={ItemPlacement.LEFT}
        featureType={FeatureType.IMAGE}
        featureUrl="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
      />
    </Box>
  );
}
