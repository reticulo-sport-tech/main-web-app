import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

interface Props {
  name: string;
  title: string;
  bio: string;
  image: string;
}

const MemberCard = ({ bio, name, title, image }: Props) => {
  return (
    <Center py={6}>
      <Box
        maxW={"320px"}
        w={"full"}
        rounded={"lg"}
        p={6}
        textAlign={"center"}
      >
        <Avatar
          size={"2xl"}
          src={image}
          alt={"Avatar Alt"}
          mb={4}
          pos={"relative"}
        />
        <Heading fontSize={"xl"} fontFamily={"body"}>
          {name}
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
