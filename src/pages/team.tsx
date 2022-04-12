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
import React, { ReactNode } from "react";

const SimpleGridWrapper = ({ children }: { children: ReactNode }) => {
  const grids: Array<ReactNode> = [];

  const elements = React.Children.toArray(children);
  var i = 0,
    j = elements.length,
    temporary: Array<ReactNode>,
    chunk = 3;
  for (i = 0, j = elements.length; i < j; i += chunk) {
    temporary = elements.slice(i, i + chunk);
    grids.push(
      <SimpleGrid
        columns={{ base: 1, md: temporary.length }}
        spacing={{ base: 0, md: 1 }}
      >
        {temporary.map((t) => t)}
      </SimpleGrid>
    );
  }

  return <>{grids.map((t) => t)}</>;
};

const Team = () => {
  return (
    <Container maxW={"5xl"}>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 4, md: 10 }}
        py={{ base: 16, md: 24 }}
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
        <SimpleGridWrapper>
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
              name={`Raghav Khare`}
              title={"Chief Relations Officer"}
              bio={""}
              image={"/raghav.jpeg"}
            />
          </GridItem>

          <GridItem colSpan={1}>
            <MemberCard
              name={"Ashish Chitale"}
              title={"Business Advisor"}
              bio={""}
              image={"/ashish.jpeg"}
            />
          </GridItem>

          <GridItem colSpan={1}>
            <MemberCard
              name={"Siddharth Mayur"}
              title={"Mentor"}
              bio={""}
              image={"/siddharth.jpg"}
            />
          </GridItem>


        </SimpleGridWrapper>
      </Stack>
    </Container>
  );
};

export default Team;
