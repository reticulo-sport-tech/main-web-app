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
import Supporters from "./Supporters";
import Team from "./team";

export default function AboutUs() {
  return (
    <Box pb={8}>
      <Team />
      <Box px={4} mx="auto">
        <Box
          w={{ base: "full", md: 11 / 12, xl: 8 / 12 }}
          textAlign={"center"}
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
            which helps you improve player performances on court and increases productivity of coaches.
          </chakra.p>
        </Box>
      </Box>

      <AboutUsSection
        name="Our Philosophy"
        description={`We’re on a mission to change how we think of sport analysis and
        bring ground breaking technologies to help improving sport in India
        from grassroot level upto the elite level`}
        featurePlacement={ItemPlacement.RIGHT}
        featureType={FeatureType.IMAGE}
        featureUrl="/mission_statement.png"
      />

      <AboutUsSection
        name="Why Us"
        description={`We understand the mammoth process of becoming a professional athlete. Data driven analytics has taken center stage in 
        a lot of sports already, we believe that we are capable of providing right value to all athletes who want to compete at a high level.`}
        featurePlacement={ItemPlacement.LEFT}
        featureType={FeatureType.IMAGE}
        featureUrl="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
      />
      <Supporters/>
    </Box>
  );
}
