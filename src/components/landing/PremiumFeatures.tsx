import { Box, Container, GridItem, Heading, Icon, SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";
import { IoAnalyticsOutline, IoSchoolOutline, IoCardOutline, IoLogoWhatsapp, IoCloudOutline, IoShieldCheckmarkOutline } from "react-icons/io5";

const Feature = ({ icon, title, desc }: { icon: any; title: string; desc: string }) => (
  <Box
    p={{ base: 5, md: 6 }}
    rounded="xl"
    borderWidth="1px"
    borderColor={useColorModeValue("blackAlpha.100", "whiteAlpha.200")}
    bg={useColorModeValue("white", "gray.800")}
    boxShadow="largeSoft"
    height="full"
  >
    <Icon as={icon} boxSize={8} color={useColorModeValue("purple.500", "purple.300")} />
    <Heading mt={4} size="md">{title}</Heading>
    <Text mt={2} color={useColorModeValue("gray.600", "gray.300")}>{desc}</Text>
  </Box>
);

export default function PremiumFeatures() {
  return (
    <Box py={{ base: 12, md: 20 }} bg={useColorModeValue("#F9FAFB", "gray.700")}> 
      <Container maxW="6xl">
        <Heading size="lg" textAlign="center">All-in-One, Premium Platform</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} mt={8}>
          <GridItem>
            <Feature icon={IoAnalyticsOutline} title="AI Integrated Analysis" desc="Video-driven insights, automated tagging, benchmarks and shareable reports for players and coaches." />
          </GridItem>
          <GridItem>
            <Feature icon={IoSchoolOutline} title="Digital Academy Infrastructure" desc="Scheduling, rosters, curriculum, attendance and performance — securely unified for scale." />
          </GridItem>
          <GridItem>
            <Feature icon={IoCardOutline} title="Payment Automation" desc="Standards-based billing and collections with Razorpay, IDFC FIRST Bank, HDFC Bank and Zoho." />
          </GridItem>
          <GridItem>
            <Feature icon={IoLogoWhatsapp} title="WhatsApp Operations" desc="Fast, reliable coordination with players and parents — notifications, updates and reminders." />
          </GridItem>
            <GridItem>
              <Feature icon={IoCloudOutline} title="Modern Cloud Stack" desc="Resilient infrastructure with performance, security and observability wired-in from day one." />
            </GridItem>
            <GridItem>
              <Feature icon={IoShieldCheckmarkOutline} title="Privacy & Security" desc="Enterprise-grade access controls and data protection across all surfaces and flows." />
            </GridItem>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

