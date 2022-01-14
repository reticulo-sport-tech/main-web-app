import {
  Stack,
  Box,
  BoxProps,
  Popover,
  PopoverTrigger,
  Link,
  useColorModeValue,
  PopoverContent,
  Text,
  Flex,
  Icon,
  SimpleGrid,
} from "@chakra-ui/react";
import NextLink from "next/link";

import { NAV_ITEMS, NavItem } from "@/components/Header/navData";
import { ChevronRightIcon, ChevronDownIcon } from "@chakra-ui/icons";

export const DesktopNav = (props: BoxProps) => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverBgColor = useColorModeValue("white", "gray.800");
  return (
    <Stack direction={"row"} spacing={4} {...props}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label} hidden={navItem.show === false}>
          <Popover
            trigger={"hover"}
            placement={"bottom-start"}
            id={`${navItem.label}-popover`}
          >
            <PopoverTrigger key={`${navItem.label}-popover-trigger`}>
              <Link
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
                {navItem.children && (
                  <Icon color={linkColor} w={5} h={5} as={ChevronDownIcon} />
                )}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                id={`${navItem.label}-popover-content`}
                border={0}
                boxShadow={"xl"}
                bg={popoverBgColor}
                p={4}
                minW={"sm"}
                rounded={"xl"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel, show }: NavItem) => {
  return (
    <NextLink href={href!} passHref={true}>
      <Link
        role={"group"}
        display={"block"}
        p={2}
        rounded={"md"}
        _hover={{ bg: useColorModeValue("brand.50", "gray.900") }}
        hidden={show === false}
      >
        <Stack direction={"row"} align={"center"}>
          <Box>
            <Text
              transition={"all .3s ease"}
              _groupHover={{ color: "brand.400" }}
              fontWeight={500}
            >
              {label}
            </Text>
            <Text fontSize={"sm"} color={"gray.500"}>
              {subLabel}
            </Text>
          </Box>
          <Flex
            transition={"all .3s ease"}
            transform={"translateX(-10px)"}
            opacity={0}
            _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
            justify={"flex-end"}
            align={"center"}
            flex={1}
          >
            <Icon color={"brand.400"} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    </NextLink>
  );
};
