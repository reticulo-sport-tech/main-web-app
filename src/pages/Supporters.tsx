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

const Supporters = () => {
  return (
    <Container maxW={"5xl"}>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 12, md: 24 }}
      >
        <Heading lineHeight={"110%"}>We are Backed by</Heading>
        <Center>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={1}>
            <GridItem colSpan={1}>
              <MemberCard
                name={"SINE, IIT Bombay"}
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
                name={"Microsoft for Startups"}
                title={"Founders Hub by Microsoft for Startups"}
                bio={""}
                image={"/microsoft-for-startups.jpg"}
              />
            </GridItem>

          </SimpleGrid>
        </Center>
      </Stack>
    </Container>
  );
};

export default Supporters;
