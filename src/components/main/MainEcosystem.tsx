import React from "react";
import {
  chakra,
  Box,
  useColorModeValue,
  Stack,
  Image,
  Flex,
  useBreakpointValue,
} from "@chakra-ui/react";
import Link from "next/link";
import { products } from "data";

const EcosystemComponent = ({
  description,
  img,
  moreHref,
  title,
  isLeft = true,
}: {
  title?: string;
  description?: string;
  moreHref?: string;
  img?: string;
  isLeft?: boolean;
}) => {
  const descColor = useColorModeValue("gray.500", "gray.300");
  const linkColor = "white";
  const linkBgColor = useColorModeValue("brand.600", "brand.500");
  const linkHoverBgColor = useColorModeValue("brand.700", "brand.600");
  const isMobile = useBreakpointValue({ base: true, md: false })

  const mainSection = (isLeft: boolean) => (
    <>
      {!isLeft && !isMobile && (
        <Box w={{ base: "full", md: 10 / 12 }} mx="auto" textAlign="center">
          <Image
            w="full"
            rounded="lg"
            shadow="2xl"
            src={img}
            alt="screenshot"
          />
        </Box>
      )}
      <Box
        w={{ base: "full", md: 11 / 12, xl: 9 / 12 }}
        mx="auto"
        pr={{ md: isLeft ? 20 : undefined }}
        pl={{ md: !isLeft ? 20 : undefined }}
      >
        <chakra.h1
          fontSize={{ base: "3xl", sm: "4xl" }}
          fontWeight="extrabold"
          lineHeight="shorter"
          mb={6}
          mt={6}
          display="block"
        >
          {title}
        </chakra.h1>
        <chakra.p mb={6} fontSize={{ base: "lg", md: "xl" }} color={descColor}>
          {description}
        </chakra.p>
        <Stack
          direction={{ base: "column", sm: "row" }}
          mb={{ base: 4, md: 8 }}
          spacing={2}
        >
          <Box display="inline-flex" rounded="md" shadow="md">
            <Link href={moreHref ?? "#"} passHref>
              <chakra.a
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                px={5}
                py={3}
                border="solid transparent"
                fontWeight="bold"
                w="full"
                rounded="md"
                color={linkColor}
                bg={linkBgColor}
                _hover={{
                  bg: linkHoverBgColor,
                }}
              >
                Learn More
              </chakra.a>
            </Link>
          </Box>
        </Stack>
      </Box>
      {(isLeft || isMobile) && (
        <Box w={{ base: "full", md: 10 / 12 }} mx="auto" textAlign="center">
          <Image
            w="full"
            rounded="lg"
            shadow="2xl"
            src={img}
            alt="screenshot"
          />
        </Box>
      )}
    </>
  );

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      px={8}
      py={{ base: 8, md: 24 }}
      mx="auto"
      maxW={"5xl"}
    >
      {mainSection(isLeft)}
    </Flex>
  );
};

const MainEcosystem = () => {
  return (
    <Box bg={useColorModeValue("gray.300", "gray.700")}>
      {products.map((p, index) => (
        <EcosystemComponent
          key={p.id}
          description={p.description}
          title={p.name}
          img={p.featureImage}
          moreHref={`/${p.id}`}
          isLeft={index % 2 === 0}
        />
      ))}
    </Box>
  );
};

export default MainEcosystem;
