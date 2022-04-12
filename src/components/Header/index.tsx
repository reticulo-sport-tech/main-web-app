import {
  Box,
  Flex,
  Container,
  Stack,
  useDisclosure,
  IconButton,
  useColorModeValue,
  Icon,
  useColorMode,
  Heading,
  Button,
  Link,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { IoMoon, IoSunny } from "react-icons/io5";
import NextLink from "next/link";

import { Logo } from "@/components/Logo";
import { TextUnderline } from "@/components/TextUnderline";
import { MobileNav } from "@/components/Header/MobileNav";
import { DesktopNav } from "@/components/Header/DesktopNav";

export const Header = () => {
  const { isOpen: isMobileNavOpen, onToggle, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("gray.50", "gray.700");

  return (
    <Box mb="60px">
      <Flex
        as={"header"}
        pos="fixed"
        top="0"
        w={"full"}
        minH={"60px"}
        boxShadow={"lg"}
        zIndex="999"
        justify={"center"}
        bg={bg}
        css={{
          backdropFilter: "saturate(180%) blur(5px)",
          backgroundColor: useColorModeValue(
            "rgba(255, 255, 255, 0.8)",
            "rgba(26, 32, 44, 0.8)"
          ),
        }}
      >
        <Container as={Flex} maxW={"7xl"} align={"center"}>
          <Flex
            flex={{ base: "0", xl: "auto" }}
            ml={{ base: -2 }}
            mr={{ base: 6, xl: 0 }}
            display={{ base: "flex", md: "none" }}
          >
            <IconButton
              onClick={onToggle}
              icon={
                isMobileNavOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={"ghost"}
              size={"sm"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>

          <Flex
            flex={{ base: 1, md: "auto" }}
            justify={{ base: "center", md: "start" }}
          >
            <NextLink href={"/"} passHref>
              <Stack
                as={"a"}
                direction={"row"}
                alignItems={"center"}
                spacing={{ base: 2, sm: 4 }}
              >
                <Icon as={Logo} w={{ base: 8 }} h={{ base: 8 }} />
                <Heading
                  as={"h1"}
                  fontSize={"xl"}
                  display={{ base: "block" }}
                >
                  <TextUnderline>Reticulo</TextUnderline>
                </Heading>
              </Stack>
            </NextLink>
          </Flex>

          <Stack
            direction={"row"}
            align={"center"}
            spacing={{ base: 6, md: 8 }}
            flex={{ base: 1, md: "auto" }}
            justify={"flex-end"}
          >
            <DesktopNav display={{ base: "none", md: "flex" }} />
            <IconButton
              size={"sm"}
              variant={"ghost"}
              aria-label={"Toggle Color Mode"}
              onClick={toggleColorMode}
              icon={
                colorMode == "light" ? (
                  <IoMoon size={18} />
                ) : (
                  <IoSunny size={18} />
                )
              }
            />
        
            {/*  <Link style={{ textDecoration: "none" }} href="https://app.reticulo.in">
              <Button fontSize={"sm"} fontWeight={400} variant={"ghost"}>
                Sign In
              </Button>
            </Link> */}
            {/* <NextLink href="/contact-us" passHref>
              <Button fontSize={"sm"} fontWeight={400} variant={"ghost"}>
                Sign In
              </Button>
            </NextLink> */}
            {/* <NextLink href="/contact-us" passHref>
              <Button
                display={{ base: "none", md: "inline-flex" }}
                fontSize={"sm"}
                fontWeight={600}
                color={"white"}
                bg={"brand.400"}
                _hover={{
                  bg: "brand.300",
                }}
              >
                Get Started
              </Button>
            </NextLink> */}
          </Stack>
        </Container>
      </Flex>
      <MobileNav isOpen={isMobileNavOpen} onClose={onClose} />
    </Box>
  );
};
