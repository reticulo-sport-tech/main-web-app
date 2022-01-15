import {
  Container,
  Stack,
  Center,
  Heading,
  Flex,
  AspectRatio,
  Text,
  SimpleGrid,
  GridItem,
  Box,
  Image,
} from "@chakra-ui/react";
import { FeatureType, ItemPlacement } from "data/types";
import { ReactNode } from "react";

interface Props {
  name?: string;
  title?: string;
  description?: string;
  featureType?: FeatureType;
  featureUrl?: string;
  featurePlacement?: ItemPlacement;
}

export const Section = ({
  description,
  featurePlacement,
  featureType,
  featureUrl,
  name,
  title,
}: Props) => {
  const featureSection = () => {
    var feature: ReactNode;
    switch (featureType) {
      case FeatureType.YOUTUBE_VIDEO:
        feature = (
          <iframe
            title={name}
            src={featureUrl}
            allowFullScreen
            style={{
              borderRadius: "2%",
            }}
          />
        );
        break;

      case FeatureType.IMAGE:
        feature = (
          <Image
            src={featureUrl}
            alt={name}
            borderRadius={"2%"}
          />
        );
        break;

      default:
        break;
    }

    return (
      <GridItem colSpan={1}>
        <Center h="full">
          <AspectRatio w="100%" my={2} ratio={16 / 9}>
            {feature}
          </AspectRatio>
        </Center>
      </GridItem>
    );
  };

  return (
    <Container maxW={"7xl"}>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 4 }}
        direction={{
          md:
            featurePlacement === ItemPlacement.LEFT ||
            featurePlacement === ItemPlacement.RIGHT
              ? "row"
              : "column",
          base: "column",
        }}
        alignContent={"center"}
        alignItems={"center"}
        w="full"
        h="full"
      >
        <SimpleGrid
          columns={{
            base: 1,
            md:
              featurePlacement === ItemPlacement.TOP ||
              featurePlacement === ItemPlacement.BOTTOM
                ? 1
                : 2,
          }}
          spacing={{ base: 5 }}
          align={"center"}
          w="full"
        >
          {(featurePlacement === ItemPlacement.TOP ||
            featurePlacement === ItemPlacement.LEFT) &&
            featureSection()}
          <GridItem colSpan={1}>
            <Center h="full">
              <Stack>
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
                <Text fontSize={"xl"}>{description}</Text>
              </Stack>
            </Center>
          </GridItem>

          {(featurePlacement === ItemPlacement.BOTTOM ||
            featurePlacement === ItemPlacement.RIGHT) &&
            featureSection()}
        </SimpleGrid>
      </Stack>
    </Container>
  );
};
