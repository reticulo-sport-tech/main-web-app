import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";

interface Props {
  name: string;
  title: string;
  bio: string;
  image: string;
  href?: string;
}

const MemberCard = ({ bio, name, title, image, href }: Props) => {
  return (
    <Center py={{ base: 2, md: 6 }}>
      <Box
        maxW={"320px"}
        w={"full"}
        rounded={"lg"}
        p={{ base: 2, md: 6 }}
        textAlign={"center"}
      >
        <Avatar size={"2xl"} src={image} name={name} mb={4} pos={"relative"} />
        <Heading fontSize={"xl"} fontFamily={"body"}>
          {name}{" "}
          {href && (
            <Link href={href} isExternal>
              <ExternalLinkIcon mx="2px" />
            </Link>
          )}
        </Heading>
        <Text fontWeight={600} color={"gray.500"} mb={4}>
          {title}
        </Text>
        <Text
          textAlign={"center"}
          color={useColorModeValue("gray.700", "gray.400")}
          px={3}
        >
          {bio}
        </Text>
      </Box>
    </Center>
  );
};

export default MemberCard;
