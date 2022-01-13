import {
  Container,
  Icon,
  Box,
  Stack,
  Text,
  Link,
  SimpleGrid,
  useColorModeValue,
  Flex,
  IconButton,
  Input,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { companyLinks, products, resources, solutions } from "../data";
import {
  INSTAGRAM_LINK,
  LINKEDIN_PAGE_LINK,
  TWITTER_LINK,
  YOUTUBE_CHANNEL_LINK,
} from "../constants";
import { Logo } from "@/components/Logo";
import { ReactNode } from "react";
import { BiMailSend } from "react-icons/bi";

const SOCIAL_LINKS = [
  {
    label: "YouTube Channel",
    href: YOUTUBE_CHANNEL_LINK,
  },
  {
    label: "Instagram Handle",
    href: INSTAGRAM_LINK,
  },
  {
    label: "Twitter Account",
    href: TWITTER_LINK,
  },
  {
    label: "LinkedIn Page",
    href: LINKEDIN_PAGE_LINK,
  },
];

const LEGAL_LINKS = [
  {
    label: "Privacy Policy",
    href: `/privacy-policy`,
  },
  /* {
    label: "Terms of Service",
    href: `/terms-of-service`,
  }, */
];

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export const Footer = () => {
  const currYear = new Date().getFullYear();
  const startYear = new Date("2021-01-01").getFullYear();

  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={"flex-start"} hidden>
            <ListHeader>Solutions</ListHeader>
            {solutions.map((category) => (
              <NextLink key={category.id} passHref href={`/${category.id}`}>
                <Link>{category.name}</Link>
              </NextLink>
            ))}
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Products</ListHeader>
            {products.map((category) => (
              <NextLink key={category.id} passHref href={`/${category.id}`}>
                <Link hidden={category.show === false}>{category.name}</Link>
              </NextLink>
            ))}
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Company</ListHeader>
            {companyLinks.map((category) => (
              <NextLink key={category.id} passHref href={`/${category.id}`}>
                <Link hidden={category.show === false}>{category.name}</Link>
              </NextLink>
            ))}
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Social</ListHeader>
            {SOCIAL_LINKS.map((link) => (
              <Link key={link.label} href={link.href} isExternal>
                {link.label}
              </Link>
            ))}
          </Stack>

          <Stack align={"flex-start"} hidden>
            <ListHeader>Resources</ListHeader>
            {resources.map((category) => (
              <NextLink key={category.id} passHref href={`/${category.id}`}>
                <Link hidden={category.show === false}>{category.name}</Link>
              </NextLink>
            ))}
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Legal</ListHeader>
            {LEGAL_LINKS.map((link) => (
              <NextLink key={link.href} passHref href={link.href}>
                <Link>{link.label}</Link>
              </NextLink>
            ))}
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Stay up to date</ListHeader>
            <Stack direction={"row"}>
              <Input
                placeholder={"Your email address"}
                bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
                border={0}
                _focus={{
                  bg: "whiteAlpha.300",
                }}
              />
              <IconButton
                bg={useColorModeValue("brand.400", "brand.800")}
                color={useColorModeValue("white", "gray.800")}
                _hover={{
                  bg: "brand.600",
                }}
                aria-label="Subscribe"
                icon={<BiMailSend />}
              />
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box pb={10}>
        <Flex
          align={"center"}
          _before={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            ml: 8,
          }}
        >
          <NextLink href={"/"} passHref>
            <Link>
              <Icon as={Logo} w={{ base: 12 }} h={{ base: 12 }} />
            </Link>
          </NextLink>
        </Flex>
        <Text pt={6} fontSize={{ base: "sm", md: "md" }} textAlign={"center"}>
          {`©${
            currYear > startYear ? ` ${startYear} -` : ""
          } ${currYear} | Reticulo Sport Technology Private Limited. | All Rights Reserved with Copyright & TradeMarks`}
        </Text>
      </Box>
    </Box>
  );
};
