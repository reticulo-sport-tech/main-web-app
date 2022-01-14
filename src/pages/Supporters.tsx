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
        py={{ base: 20, md: 28 }}
      >
        <Heading
          lineHeight={"110%"}
        >
          We are Backed by
        </Heading>
        <Center>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={1}>
            <GridItem colSpan={1}>
              <MemberCard
                name={"SINE, IIT Bombay"}
                title={"Society of Innovation and Entrepreurship IIT Bombay"}
                bio={""}
                image={"/sine.jpeg"}
              />
            </GridItem>

            <GridItem colSpan={1}>
              <MemberCard
                name={"MeitY"}
                title={"Ministry of Electronics and Telecommunications"}
                bio={""}
                image={"/meity.jpg"}
              />
            </GridItem>

          </SimpleGrid>
        </Center>
      </Stack>
    </Container>
  );
};

export default Supporters;