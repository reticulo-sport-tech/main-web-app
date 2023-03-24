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
  useToast,
  FormControl,
  FormLabel,
  FormErrorMessage,
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
import { NewsLetterUser } from "data/types";
import { submitNewsLetterUser } from "api";
import { useForm } from "react-hook-form";
import { BsInstagram, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";

const SOCIAL_LINKS = [
  {
    label: "YouTube Channel",
    href: YOUTUBE_CHANNEL_LINK,
    icon: <BsYoutube size={"24px"} />,
  },
  {
    label: "Instagram Handle",
    href: INSTAGRAM_LINK,
    icon: <BsInstagram size={"24px"} />,
  },
  {
    label: "Twitter Account",
    href: TWITTER_LINK,
    icon: <BsTwitter size={"24px"} />,
  },
  {
    label: "LinkedIn Page",
    href: LINKEDIN_PAGE_LINK,
    icon: <BsLinkedin size={"24px"} />,
  },
];

const LEGAL_LINKS = [
  {
    label: "Privacy Policy",
    href: `/privacy-policy`,
  },
  {
    label: "Cancellation & Refund Policy",
    href: `/cancellation-policy`,
  },
  {
    label: "Terms of Service",
    href: `/terms-of-service`,
  },
];

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"700"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

const NewsLetter = () => {
  const toast = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<NewsLetterUser>({
    mode: "onTouched",
    reValidateMode: "onChange",
  });
  const onSubmit = async (data: NewsLetterUser) => {
    try {
      await submitNewsLetterUser(data);
      toast({
        title: "We will keep you updated reguraly!",
        status: "success",
        isClosable: true,
        position: "top",
      });
      reset();
    } catch (error) {
      toast({
        title: "An error has occured!",
        status: "error",
        isClosable: true,
        position: "top",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack align={"flex-start"}>
        <ListHeader>Stay up to date</ListHeader>
        <Stack direction={"row"}>
          <FormControl id="email" isInvalid={!!errors?.email}>
            <Input
              isDisabled={isSubmitting}
              type="email"
              {...register("email", {
                required: "Required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Invalid Email",
                },
              })}
            />
            <FormErrorMessage>
              {errors?.email && errors?.email?.message}
            </FormErrorMessage>
          </FormControl>
          <IconButton
            bg={useColorModeValue("brand.400", "brand.800")}
            color={useColorModeValue("white", "gray.800")}
            _hover={{
              bg: "brand.600",
            }}
            aria-label="Subscribe"
            icon={<BiMailSend />}
            isLoading={isSubmitting}
            type="submit"
          />
        </Stack>
      </Stack>
    </form>
  );
};

export const Footer = () => {
  const currYear = new Date().getFullYear();
  const startYear = new Date("2021-01-01").getFullYear();
  const socialIconHoverColor = useColorModeValue("white", "gray.700");

  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10} px={8}>
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
            <Stack direction={"row"}>
              {SOCIAL_LINKS.map((link) => (
                <Link key={link.label} href={link.href} isExternal>
                  <IconButton
                    aria-label={link.label}
                    variant="ghost"
                    icon={link.icon}
                    _hover={{
                      bg: "brand.500",
                      color: socialIconHoverColor,
                    }}
                    isRound
                  />
                </Link>
              ))}
            </Stack>
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
              <NextLink href={link.href} key={link.href} passHref>
                <Link>{link.label}</Link>
              </NextLink>
            ))}
          </Stack>

          <NewsLetter />
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
