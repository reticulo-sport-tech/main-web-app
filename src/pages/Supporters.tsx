import MemberCard from "@/components/MemberCard";
import {
  Box,
  Button,
  Center,
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
import React from "react";
import { ReactNode } from "react";

const SimpleGridWrapper = ({ children }: { children: ReactNode }) => {
  const grids: Array<ReactNode> = [];

  const elements = React.Children.toArray(children);
  console.log(elements)
  var i = 0,
    j = elements.length,
    temporary: Array<ReactNode>,
    chunk = 5;
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


const Supporters = () => {
  return (
    <Container maxW={"6xl"}>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 12, md: 24 }}
      >
        <Heading lineHeight={"110%"}>We are backed by</Heading>
          <SimpleGridWrapper>
            <GridItem colSpan={1}>
              <MemberCard
                name={"SINE"}
                title={"Society of Innovation and Entrepreurship IIT Bombay"}
                bio={""}
                image={"/sine.jpeg"}
                href="https://sineiitb.org/"
              />
            </GridItem>

            <GridItem colSpan={1}>
              <MemberCard
                name={"MeitY"}
                title={"Ministry of Electronics and Telecommunications"}
                bio={""}
                image={"/meity.jpg"}
                href="https://www.meity.gov.in/"
              />
            </GridItem>
            <GridItem colSpan={1}>
              <MemberCard
                name={"Founders Hub"}
                title={"Founders Hub by Microsoft for Startups"}
                bio={""}
                image={"/microsoft-for-startups.jpg"}
                href="https://www.microsoft.com/en-us/startups"
              />
            </GridItem>
            <GridItem colSpan={1}>
              <MemberCard
                name={"DST"}
                title={"Department of Science and Technology"}
                bio={""}
                image={"/dst.png"}
                href="https://dst.gov.in/"
              />
            </GridItem>
            <GridItem colSpan={1}>
              <MemberCard
                name={"TIH-IoT IITB"}
                title={"Technology Innovation Hub for Internet of Things, IIT Bombay"}
                bio={""}
                image={"/tih-iot.jpeg"}
                href="https://www.tih.iitb.ac.in/"
              />
            </GridItem>

          </SimpleGridWrapper>
      </Stack>
    </Container>
  );
};

export default Supporters;
