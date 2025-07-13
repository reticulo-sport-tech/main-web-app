import Product from "@/components/Product";
import { Section } from "@/components/Product/Section";
import { SEOWrapper } from "@/components/SEO";
import {
  Box,
  Center,
  Flex,
  HStack,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FeatureType, ItemPlacement } from "@/data/types";
import {
  GooglePlayButton,
  AppStoreButton,
} from "@/components/mobile-app-button";

function PriceWrapper({ price }: { price: number }) {
  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: "center", lg: "flex-start" }}
      borderColor={useColorModeValue("gray.200", "gray.500")}
      borderRadius={"xl"}
      maxW={"lg"}
      bg={"brand.50"}
    >
      <Box position="relative">
        <Box
          position="absolute"
          top="-16px"
          left="50%"
          style={{ transform: "translate(-50%)" }}
        >
          <Text
            textTransform="uppercase"
            bg={useColorModeValue("red.300", "red.700")}
            px={3}
            py={1}
            color={useColorModeValue("gray.900", "gray.300")}
            fontSize="sm"
            fontWeight="600"
            rounded="xl"
          >
            Pricing
          </Text>
        </Box>
        <Box py={4} px={12}>
          <HStack justifyContent="center">
            <Text fontSize="3xl" fontWeight="600">
              ₹
            </Text>
            <Text fontSize="5xl" fontWeight="900">
              {price}
            </Text>
            <Text fontSize="3xl" color="gray.500">
              /month
            </Text>
          </HStack>
        </Box>
      </Box>
    </Box>
  );
}

const Radlo = () => {
  const APKUrl =
    "https://play.google.com/store/apps/details?id=in.reticulo.gameplan";
  const IOSUrl = "https://apps.apple.com/in/app/radlo/id6479612600";

  return (
    <SEOWrapper
      title="Reticulo | Radlo"
      description={
        "Revolutionize your sports academy experience with our comprehensive platform, built to empower coaches and elevate players."
      }
    >
      {/* <Icon
            boxSize={8}
            aria-hidden="true"
            as={BiDesktop}
            color={useColorModeValue("white", "gray.900")}
          /> */}
      <Product
        name={"Radlo"}
        icon={<Image src="/radlo/logo.png" alt="Radlo Logo" width={100} />}
        simpleDescription={"Your All-in-One Sports Academy Ecosystem"}
        description={
          "Revolutionize your sports academy experience with our comprehensive platform, built to empower coaches and elevate players."
        }
      >
        <Flex
          direction={{
            base: "column",
            md: "row",
          }}
        >
          <Box px={{ base: 0, md: 2 }} py={{ base: 2, md: 0 }}>
            <GooglePlayButton
              url={APKUrl}
              width={190}
              theme={"dark"}
              height={64}
              className="app-store-button"
            />
          </Box>
          <Box px={{ base: 0, md: 2 }} py={{ base: 2, md: 0 }}>
            <AppStoreButton
              url={IOSUrl}
              width={190}
              theme={"dark"}
              height={64}
              className="app-store-button"
            />
          </Box>
        </Flex>
        {/* <Stack
          w={{ base: "90%", sm: "80%" }}
          scaleX={4}
          direction={{ base: "column", sm: "row" }}
        >
          <LinkBox w="full">
            <Button w="100%" colorScheme={"red"}>
              <LinkOverlay
                isExternal
                href="https://www.youtube.com/watch?v=w7b03ZK6-XY"
                textDecor={"none"}
              >
                Click here for Demo!
              </LinkOverlay>
            </Button>
          </LinkBox>
        </Stack> */}
        <Tabs
          variant="soft-rounded"
          colorScheme="brand"
          align="center"
          size={{ base: "lg", md: "lg" }}
        >
          <Center>
            <TabList
              borderWidth={1}
              borderColor="brand.500"
              p={2}
              rounded={"full"}
              bg="brand.50"
            >
              <Tab>
                <Text px={{ base: 1, md: 4 }}>For Players</Text>
              </Tab>
              <Tab>
                <Text px={{ base: 1, md: 4 }}>For Coaches</Text>
              </Tab>
            </TabList>
          </Center>
          <TabPanels>
            <TabPanel>
              <Section
                name="Tournaments"
                description="Keep track of all your tournaments and get notified whenever there is a new one or changes"
                featurePlacement={ItemPlacement.RIGHT}
                featureType={FeatureType.IMAGE}
                featureUrl="/radlo/tournaments.png"
              />
              <Section
                name="Digital Diary"
                description="Keep track of your daily activities and record your progress"
                featurePlacement={ItemPlacement.LEFT}
                featureType={FeatureType.IMAGE}
                featureUrl="/radlo/diary.png"
              />
              <Section
                name="Fees"
                description="Pay your fees directly with all your payment methods like UPI, Net Banking, Credit Cards, Debit Cards, EMI, etc."
                featurePlacement={ItemPlacement.RIGHT}
                featureType={FeatureType.IMAGE}
                featureUrl="/radlo/fees.png"
              />
              <Section
                name="Attendance"
                description="Keep track of your attendance and get detailed reports"
                featurePlacement={ItemPlacement.LEFT}
                featureType={FeatureType.IMAGE}
                featureUrl="/radlo/player_attendance.png"
              />
              <Section
                name="Notice Board"
                description="Get notified whenever there is a new notice or holiday"
                featurePlacement={ItemPlacement.RIGHT}
                featureType={FeatureType.IMAGE}
                featureUrl="/radlo/updates.png"
              />
              <Box pt={{ base: 16, md: 24 }}></Box>
              <PriceWrapper price={100} />
            </TabPanel>
            <TabPanel>
              <Section
                name="Fee Management"
                description="Easily collect and manage your player's fees"
                featurePlacement={ItemPlacement.RIGHT}
                featureType={FeatureType.IMAGE}
                featureUrl="/radlo/fees.png"
              />
              <Section
                name="Attendance"
                description="Manage your player's attendance and get detailed reports"
                featurePlacement={ItemPlacement.LEFT}
                featureType={FeatureType.IMAGE}
                featureUrl="/radlo/attendancemanagement.png"
              />
              <Section
                name="Finances"
                description="Track your academy's finances and get a easy to view dashboard"
                featurePlacement={ItemPlacement.RIGHT}
                featureType={FeatureType.IMAGE}
                featureUrl="/radlo/finances.png"
              />
              <Section
                name="Notice Board"
                description="Convey any important information to your players in a clear and concise manner along with holiday notices"
                featurePlacement={ItemPlacement.LEFT}
                featureType={FeatureType.IMAGE}
                featureUrl="/radlo/holidays.png"
              />
              <Box pt={{ base: 16, md: 24 }}></Box>
              <PriceWrapper price={0} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Product>
    </SEOWrapper>
  );
};

export default Radlo;
