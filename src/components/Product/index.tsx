import { Container, Stack, Heading, Text, Center } from "@chakra-ui/react";
import { FeatureType, ItemPlacement } from "@/data/types";
import { ReactNode } from "react";

interface Props {
  name: string;
  icon: ReactNode;
  simpleDescription: string;
  description: string;
  featureType?: FeatureType;
  featurePlacement?: ItemPlacement;
  children?: ReactNode;
}

export default function Product({
  name,
  description,
  icon,
  featurePlacement,
  children,
  simpleDescription,
}: Props) {
  return (
    <Container maxW={"7xl"}>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 8, md: 16 }}
        direction={{
          md:
            featurePlacement === ItemPlacement.LEFT ||
            featurePlacement === ItemPlacement.RIGHT
              ? "row"
              : "column",
          base: "column",
        }}
      >
        <Stack spacing={{ base: 5 }} align={"center"}>
          <Center bg="brand.500" borderRadius={14} h={14} w={14}>
            {icon}
          </Center>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "3xl", lg: "4xl" }}
            textAlign={"center"}
          >
            <Text as={"span"} color={"brand.400"}>
              {name}
            </Text>
          </Heading>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "5xl" }}
            textAlign={"center"}
          >
            <Text as={"span"} color={"gray.500"}>
              {simpleDescription}
            </Text>
          </Heading>
          <Center>
            <Text fontSize="2xl" textAlign={"center"}>
              {description}
            </Text>
          </Center>
        </Stack>
        {children}
      </Stack>
    </Container>
  );
}
