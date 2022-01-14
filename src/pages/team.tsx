import MemberCard from "@/components/MemberCard";
import {
  Box,
  Button,
  chakra,
  Container,
  Flex,
  GridItem,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const Team = () => {
  return (
    <Container maxW={"5xl"}>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          Meet our{" "}
          <Text as={"span"} color={"brand.400"}>
            Team
          </Text>
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={1}>
          <GridItem colSpan={1}>
            <MemberCard
              name={"Arya Bhivpathaki"}
              title={"Co-Founder & CEO"}
              bio={""}
              image={"/arya.jpeg"}
            />
          </GridItem>

          <GridItem colSpan={1}>
            <MemberCard
              name={"Devakanta Rao"}
              title={"Co-Founder & CTO"}
              bio={""}
              image={"/dev.jpeg"}
            />
          </GridItem>

          <GridItem colSpan={1}>
            <MemberCard
              name={"Aniket Velhankar"}
              title={"AI & ML Lead"}
              bio={""}
              image={"/aniket.jpeg"}
            />
          </GridItem>

          <GridItem colSpan={1}>
            <MemberCard
              name={"Raghav Khare"}
              title={"Business Analyst"}
              bio={""}
              image={"/raghav.jpeg"}
            />
          </GridItem>
        </SimpleGrid>
      </Stack>
    </Container>
  );
};

export default Team;
