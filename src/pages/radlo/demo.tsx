import {
  Flex,
  useColorModeValue,
  chakra,
  Box,
  Stack,
  Text,
  HStack,
  Center,
  Spacer,
} from "@chakra-ui/react";

import { useState } from "react";

export default function Demo() {
  const slides = [
    {
      func: Register,
    },
    {
      func: Info,
    },
    {
      func: CreateBoards,
    },
    {
      func: UseShapes,
    },
    {
      func: UseControls,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const slidesCount = slides.length;

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  };
  const nextSlide = () => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  };
  const setSlide = (slide: number) => {
    setCurrentSlide(slide);
  };
  const carouselStyle = {
    ml: `-${currentSlide * 100}%`,
  };

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      // p={10}
      mx="auto"
      maxW={"96vw"}
    >
      <Flex w="full" overflowX="hidden" overflowY="scroll" pos="relative">
        <Flex h="full" w="full" {...carouselStyle}>
          {slides.map((slide, sid) => (
            <Box key={`slide-${sid}`} boxSize="full" shadow="md" flex="none">
              {slide.func()}
            </Box>
          ))}
        </Flex>
        <Text
          cursor="pointer"
          pos="absolute"
          top="50%"
          w="auto"
          mt="-22px"
          p="16px"
          color="black"
          fontWeight="bold"
          fontSize="18px"
          transition="0.6s ease"
          borderRadius="0 3px 3px 0"
          userSelect="none"
          _hover={{
            opacity: 0.8,
            bg: "gray",
          }}
          left="0"
          onClick={prevSlide}
        >
          &#10094;
        </Text>
        <Text
          cursor="pointer"
          pos="absolute"
          top="50%"
          w="auto"
          mt="-22px"
          p="16px"
          color="black"
          fontWeight="bold"
          fontSize="18px"
          transition="0.6s ease"
          borderRadius="0 3px 3px 0"
          userSelect="none"
          _hover={{
            opacity: 0.8,
            bg: "gray",
          }}
          right="0"
          onClick={nextSlide}
        >
          &#10095;
        </Text>
        <HStack justify="center" pos="absolute" bottom="8px" w="full">
          {Array.from({ length: slidesCount }).map((_, slide) => (
            <Box
              key={`dots-${slide}`}
              cursor="pointer"
              boxSize={["7px", "15px", "15px"]}
              m="0 2px"
              bg={currentSlide === slide ? "blackAlpha.800" : "blackAlpha.500"}
              rounded="50%"
              display="inline-block"
              transition="background-color 0.6s ease"
              _hover={{ bg: "blackAlpha.800" }}
              onClick={() => setSlide(slide)}
            ></Box>
          ))}
        </HStack>
      </Flex>
    </Flex>
  );
}

function Register() {
  return (
    <Center>
      <Stack
        direction={{ base: "column", sm: "row" }}
        mb={{ base: 4, md: 8 }}
        px={10}
        my={10}
        w="full"
      >
        <Box
          maxW={{ base: "100%", sm: "70%" }}
          maxH={{ base: "40vh", sm: "100%" }}
          overflowY="scroll"
        >
          <chakra.h2
            fontSize={{ base: "3xl", sm: "4xl" }}
            fontWeight="extrabold"
            lineHeight="shorter"
            color={useColorModeValue("black", "gray.100")}
            mb={6}
          >
            <chakra.span display="block">Register and Login</chakra.span>
          </chakra.h2>
          <chakra.p
            mb={6}
            fontSize={{ base: "lg", md: "xl" }}
            color={useColorModeValue("gray.800", "gray.300")}
          >
            Use your email address to register, choose a strong password for
            maximum security.
          </chakra.p>
          <chakra.span
            mb={6}
            fontSize={{ base: "lg", md: "xl" }}
            color={useColorModeValue("gray.800", "gray.300")}
          >
            Login using your credentials through mobile app or website
            <chakra.a href={"https://gameplan.reticulo.in"}>
              {" "}
              <Text fontStyle="u" color="blue.400">
                gameplan.reticulo.in{" "}
              </Text>
            </chakra.a>
          </chakra.span>
        </Box>
        <Spacer />
        <Center w={{ base: "full", md: 10 / 12 }} textAlign="center">
          <video
            src={"/Register-Login-Demo.mp4"}
            controls
            height={700}
            autoPlay
            loop
            muted
            preload="auto"
          />
        </Center>
      </Stack>
    </Center>
  );
}

function Info() {
  return (
    <Center>
      <Stack
        direction={{ base: "column", sm: "row" }}
        mb={{ base: 4, md: 8 }}
        px={10}
        my={10}
        w="full"
      >
        <Box
          maxW={{ base: "100%", sm: "70%" }}
          maxH={{ base: "40vh", sm: "100%" }}
          overflowY="scroll"
        >
          <chakra.h2
            fontSize={{ base: "3xl", sm: "4xl" }}
            fontWeight="extrabold"
            lineHeight="shorter"
            color={useColorModeValue("black", "gray.100")}
            mb={6}
          >
            <chakra.span display="block">Information</chakra.span>
          </chakra.h2>
          <chakra.p
            mb={6}
            fontSize={{ base: "lg", md: "xl" }}
            color={useColorModeValue("gray.800", "gray.300")}
          >
            Right Side Panel of the mobile app has Dashboard and Your Available
            Boards
          </chakra.p>
          <chakra.p
            mb={6}
            fontSize={{ base: "lg", md: "xl" }}
            color={useColorModeValue("gray.800", "gray.300")}
          >
            {"'0/10' means you have used 0 out of 10 available boards"}
          </chakra.p>
          <chakra.span
            mb={6}
            fontSize={{ base: "lg", md: "xl" }}
            color={useColorModeValue("gray.800", "gray.300")}
          >
            Profile Option takes you to profile page where you can upgrade your
            current subscription and change your name
          </chakra.span>
        </Box>
        <Spacer />
        <Center w={{ base: "full", md: 10 / 12 }} textAlign="center">
          <video
            src={"/Information-Demo.mp4"}
            controls
            height={700}
            autoPlay
            loop
            muted
            preload="auto"
          />
        </Center>
      </Stack>
    </Center>
  );
}

function CreateBoards() {
  return (
    <Center>
      <Stack
        direction={{ base: "column", sm: "row" }}
        mb={{ base: 4, md: 8 }}
        px={10}
        my={10}
        w="full"
      >
        <Box
          maxW={{ base: "100%", sm: "70%" }}
          maxH={{ base: "40vh", sm: "100%" }}
          overflowY="scroll"
        >
          <chakra.h2
            fontSize={{ base: "3xl", sm: "4xl" }}
            fontWeight="extrabold"
            lineHeight="shorter"
            color={useColorModeValue("black", "gray.100")}
            mb={6}
          >
            <chakra.span display="block">Creating a Board</chakra.span>
          </chakra.h2>
          <chakra.p
            mb={6}
            fontSize={{ base: "lg", md: "xl" }}
            color={useColorModeValue("gray.800", "gray.300")}
          >
            After you go to My Boards Tab, you will be able to see all boards
            that you have created till now.
          </chakra.p>
          <chakra.p
            mb={6}
            fontSize={{ base: "lg", md: "xl" }}
            color={useColorModeValue("gray.800", "gray.300")}
          >
            You will also see a create new board button on top right corner of
            the screen, tap on that to create a new board
          </chakra.p>
          <chakra.p
            mb={6}
            fontSize={{ base: "lg", md: "xl" }}
            color={useColorModeValue("gray.800", "gray.300")}
          >
            After pressing the {"'+'"} button, you will see a variety of presets
            to choose from, these presets are created carefully for users to
            reduce efforts for basic tasks
          </chakra.p>
          <chakra.span
            mb={6}
            fontSize={{ base: "lg", md: "xl" }}
            color={useColorModeValue("gray.800", "gray.300")}
          >
            Some of the templates include Broadcast View, Side View, 2D Court
            View, Blank page and so on. Press the create button to use the
            preset directly into your board
          </chakra.span>
        </Box>
        <Spacer />
        <Center w={{ base: "full", md: 10 / 12 }} textAlign="center">
          <video
            src={"/Create-Board-Demo.mp4"}
            controls
            height={700}
            autoPlay
            loop
            muted
            preload="auto"
          />
        </Center>
      </Stack>
    </Center>
  );
}

function UseShapes() {
  return (
    <Center>
      <Stack
        direction={{ base: "column", sm: "row" }}
        mb={{ base: 4, md: 8 }}
        px={10}
        my={10}
        w="full"
      >
        <Box
          maxW={{ base: "100%", sm: "70%" }}
          maxH={{ base: "40vh", sm: "100%" }}
          overflowY="scroll"
        >
          <chakra.h2
            fontSize={{ base: "3xl", sm: "4xl" }}
            fontWeight="extrabold"
            lineHeight="shorter"
            color={useColorModeValue("black", "gray.100")}
            mb={6}
          >
            <chakra.span display="block">Operating in a Board</chakra.span>
          </chakra.h2>
          <chakra.p
            mb={6}
            fontSize={{ base: "lg", md: "xl" }}
            color={useColorModeValue("gray.800", "gray.300")}
          >
            Once you create a board, sky is the limit. Your creativity and
            player{"'"}s understanding drives the process. Following are the
            menus and what they can actually do :
          </chakra.p>

          <chakra.p
            mb={6}
            fontSize={{ base: "lg", md: "xl" }}
            color={useColorModeValue("gray.800", "gray.300")}
          >
            Left-Most Menu is for shapes, you can draw various shapes listed and
            even can draw free hand with it. It also has the facility of using
            shuttlecock shape, left and right foots for increasing understanding
            in positioning direction, etc.
          </chakra.p>
        </Box>
        <Spacer />
        <Center w={{ base: "full", md: 10 / 12 }} textAlign="center">
          <video
            src={"/UseShapes-Demo.mp4"}
            controls
            height={700}
            autoPlay
            loop
            muted
            preload="auto"
          />
        </Center>
      </Stack>
    </Center>
  );
}

function UseControls() {
  return (
    <Center>
      <Stack
        direction={{ base: "column", sm: "row" }}
        mb={{ base: 4, md: 8 }}
        px={10}
        my={10}
        w="full"
      >
        <Box
          maxW={{ base: "100%", sm: "70%" }}
          maxH={{ base: "40vh", sm: "100%" }}
          overflowY="scroll"
        >
          <chakra.h2
            fontSize={{ base: "3xl", sm: "4xl" }}
            fontWeight="extrabold"
            lineHeight="shorter"
            color={useColorModeValue("black", "gray.100")}
            mb={6}
          >
            <chakra.span display="block">Operating in a Board</chakra.span>
          </chakra.h2>
          <chakra.p
            mb={6}
            fontSize={{ base: "lg", md: "xl" }}
            color={useColorModeValue("gray.800", "gray.300")}
          >
            The second menu is for the controls, there are various types of
            settings that can be controlled for the board, they include :
          </chakra.p>
          <chakra.p
            mb={6}
            fontSize={{ base: "lg", md: "xl" }}
            color={useColorModeValue("gray.800", "gray.300")}
          >
            <chakra.ol>
              <chakra.li>
                Basic Settings - To Save the Board, to record the board to share
                video file, download the board and so on
              </chakra.li>
              <chakra.li>
                Shape Settings - Change Border Color of Shapes, Change Fill
                color of Shapes or to change border widths
              </chakra.li>
              <chakra.li>
                Court Background Settings - Change Background Color of the court
                setting, if 2D Court is used, it will change color of entire
                court
              </chakra.li>
              <chakra.li>
                General Board Settings - Change name of board, draw grid lines
                on the board and so on.
              </chakra.li>
            </chakra.ol>
          </chakra.p>
        </Box>
        <Spacer />
        <Center w={{ base: "full", md: 10 / 12 }} textAlign="center">
          <video
            src={"/UseControls-Demo.mp4"}
            controls
            height={700}
            autoPlay
            loop
            muted
            preload="auto"
          />
        </Center>
      </Stack>
    </Center>
  );
}
