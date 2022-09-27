import Product from "@/components/Product";
import { Section } from "@/components/Product/Section";
import { SEOWrapper } from "@/components/SEO";
import {
  Button,
  chakra,
  Flex,
  Icon,
  Link,
  LinkBox,
  LinkOverlay,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { FeatureType, ItemPlacement } from "data/types";
import { BiDesktop } from "react-icons/bi";
import NextLink from "next/link";

const Tennisboard = () => {
  return (
    <SEOWrapper
      title="Reticulo | Tennisboard"
      description={
        "Theory based fundamentals are the building blocks of an intelligent and successful player who grows into a champion. " +
        "This digital Whiteboard for Tennis will help coaches to educate players better from a fundamental level." +
        " Create, Discuss, Visualize, Simulate and Note down points on a digital platform"
      }
    >
      <Product
        name={"Tennisboard"}
        icon={
          <Icon
            boxSize={8}
            aria-hidden="true"
            as={BiDesktop}
            color={useColorModeValue("white", "gray.900")}
          />
        }
        simpleDescription={"Understanding the game from scratch"}
        description={
          "Theory based fundamentals are the building blocks of an intelligent and successful player who grows into a champion. " +
          "This digital Whiteboard for Tennis will help coaches to educate players better from a fundamental level." +
          " Create, Discuss, Visualize, Simulate and Note down points on a digital platform"
        }
        sections={[
          <Stack key={-1} w="50%" scaleX={4} direction="row">
            <LinkBox w="full">
              <Button isFullWidth colorScheme={"blue"}>
                <LinkOverlay
                  isExternal
                  href="https://tennisboard.reticulo.in"
                  textDecor={"none"}
                >
                  Go to Tennisboard
                </LinkOverlay>
              </Button>
            </LinkBox>
          </Stack>,
          <Section
            key={0}
            name="Boards"
            description="Create multiple boards for players to train using different types of interfaces"
            featurePlacement={ItemPlacement.RIGHT}
            featureType={FeatureType.IMAGE}
            featureUrl="/Tennisboard/Dash.png"
          />,
          <Section
            key={1}
            name="Rallies"
            description="Rallies on a 2D Court with simulations for scheduling drills and improving basics"
            featurePlacement={ItemPlacement.LEFT}
            featureType={FeatureType.IMAGE}
            featureUrl="/Tennisboard/Rally.png"
          />,
          <Section
            key={2}
            name="Trajectories"
            description="Fundamentally understand smaller details of shuttlecock path, become a better player"
            featurePlacement={ItemPlacement.RIGHT}
            featureType={FeatureType.IMAGE}
            featureUrl="/Tennisboard/Trajectory.png"
          />,
          <Section
            key={3}
            name="Movements and Positioning"
            description="Footwork improvement, understand positioning in different situations in match, practice efficiently"
            featurePlacement={ItemPlacement.LEFT}
            featureType={FeatureType.IMAGE}
            featureUrl="/Tennisboard/Movements.png"
          />,
        ]}
      />
    </SEOWrapper>
  );
};

export default Tennisboard;
