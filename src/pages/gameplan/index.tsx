import Product from "@/components/Product";
import { Section } from "@/components/Product/Section";
import { SEOWrapper } from "@/components/SEO";
import {
  Button,
  Center,
  chakra,
  Flex,
  Icon,
  Link,
  LinkBox,
  LinkOverlay,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FeatureType, ItemPlacement } from "data/types";
import { BiDesktop } from "react-icons/bi";
import ReactPlayer from "react-player";
import useWindowSize from "@rooks/use-window-size";

const GamePlan = () => {
  const { innerWidth, innerHeight, outerHeight, outerWidth } = useWindowSize();
  const hasWindow = typeof window !== "undefined";
  return (
    <SEOWrapper
      title="Reticulo | GamePlan"
      description={
        "Theory based fundamentals are the building blocks of an intelligent and successful player who grows into a champion. " +
        "This digital Whiteboard for Badminton will help coaches to educate players better from a fundamental level." +
        " Create, Discuss, Visualize, Simulate and Note down points on a digital platform"
      }
    >
      <Product
        name={"GamePlan"}
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
          "This digital Whiteboard for any Sports will help coaches to educate players better from a fundamental level." +
          " Create, Discuss, Visualize, Simulate and Note down points on a digital platform"
        }
        sections={[
          <Stack
            key={-1}
            w={{ base: "90%", sm: "80%" }}
            scaleX={4}
            direction={{ base: "column", sm: "row" }}
          >
            <LinkBox w="full">
              <Button isFullWidth colorScheme={"blue"}>
                <LinkOverlay
                  isExternal
                  href="https://gameplan.reticulo.in"
                  textDecor={"none"}
                >
                  Go to GamePlan
                </LinkOverlay>
              </Button>
            </LinkBox>
            <LinkBox w="full">
              <Button isFullWidth colorScheme={"red"}>
                <LinkOverlay
                  isExternal
                  href="https://www.youtube.com/watch?v=w7b03ZK6-XY"
                  textDecor={"none"}
                >
                  Click here for Demo!
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
            featureUrl="/gameplan/cover.png"
          />,
          <Section
            key={1}
            name="Rallies"
            description="Rallies on a 2D Court with simulations for scheduling drills and improving basics"
            featurePlacement={ItemPlacement.LEFT}
            featureType={FeatureType.IMAGE}
            featureUrl="/Baddyboard/Rally.png"
          />,
          <Section
            key={2}
            name="Trajectories"
            description="Fundamentally understand smaller details of shuttlecock path, become a better player"
            featurePlacement={ItemPlacement.RIGHT}
            featureType={FeatureType.IMAGE}
            featureUrl="/Baddyboard/Trajectory.png"
          />,
          <Section
            key={3}
            name="Movements and Positioning"
            description="Footwork improvement, understand positioning in different situations in match, practice efficiently"
            featurePlacement={ItemPlacement.LEFT}
            featureType={FeatureType.IMAGE}
            featureUrl="/Baddyboard/Movements.png"
          />,
        ]}
      />
    </SEOWrapper>
  );
};

export default GamePlan;
