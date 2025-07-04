import {
  Flex,
  VStack,
  Divider,
  Text,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";

const LogoPng = ({ h = 8 }: { h?: number }) => {
  return (
    <Image
      src="/favicon.png"
      alt="logo"
      bg={useColorModeValue("white", "gray.900")}
      rounded="xl"
      p={1}
      h={h}
    />
  );
};

const Invoice = () => {
  return (
    <Flex direction={"column"} justify={"space-between"} h="100vh">
      <Flex direction={"column"} p={8}>
        <Flex direction="row" justify={"space-between"} w="100%">
          <LogoPng h={32} />
          <VStack pr={3}>
            <Text fontSize={10} textAlign={"right"}>
              Reticulo Sport Technology Pvt. Ltd.
            </Text>
            <Text fontSize={10} textAlign={"right"}>
              CIN: U72900PN2021PTC204044
            </Text>
            <Text fontSize={10} textAlign={"right"}>
              892, Sanskriti, Mukund Nagar
            </Text>
            <Text fontSize={10} textAlign={"right"}>
              Pune, Maharashtra 411037
            </Text>
            <Text fontSize={10} textAlign={"right"}>
              admin@reticulo.in
            </Text>
            <Text fontSize={10} textAlign={"right"}>
              Contact +91 82758 79439
            </Text>
          </VStack>
        </Flex>
        <Flex direction={"column"} pt={12} pl={4}>
          <Text fontSize={10}>Billed to:</Text>
          <Text fontSize={10}>$$Name$$</Text>
          <Text fontSize={10}>$$State$</Text>
          <Text fontSize={10}>$$Pincode$$</Text>
        </Flex>
        <Flex direction={"row"} justify={"space-between"} pt={12}>
          <Flex
            direction={"row"}
            justify={"space-between"}
            w="50%"
            pr={2}
            bg="rgba(53, 152, 243, .08)"
            borderRadius={"30px 30px 0px 30px"}
          >
            <Flex direction={"column"} p={4}>
              <Text fontSize={10}>Invoice Date</Text>
              <Text fontSize={10}>$$InvoiceDate</Text>
            </Flex>
            <Flex direction={"column"} p={4}>
              <Text fontSize={10}>Payment Date</Text>
              <Text fontSize={10}>$$InvoiceDate</Text>
            </Flex>
          </Flex>
          <Flex
            direction={"row"}
            justify={"space-between"}
            w="50%"
            pl={2}
            borderRadius={"30px 30px 0px 30px"}
          >
            <Flex direction={"column"} p={4}>
              <Text fontSize={10}>Invoice Ref</Text>
              <Text fontSize={10}>#$InvoiceRef</Text>
            </Flex>
            <Flex direction={"column"} p={4}>
              <Text fontSize={10}>Status</Text>
              <Text fontSize={10}>PAID</Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex direction={"row"} justify={"space-between"}>
          <Flex
            direction={"column"}
            w="50%"
            pl={2}
            borderRadius={"30px 30px 0px 30px"}
            mt={4}
          >
            <Text pb={4} fontSize={10}>
              Item Description
            </Text>
            <Divider
              w="100%"
              borderWidth={0.5}
              borderColor={"gray.500"}
              mb={4}
            />
            <Text pb={4} fontSize={10}>
              Radlo Pro For $$Months$$ Month
            </Text>
            <Divider
              w="100%"
              borderWidth={0.5}
              borderColor={"gray.500"}
              mb={4}
            />
          </Flex>{" "}
          <Flex
            direction={"column"}
            w="50%"
            bg="rgba(53, 152, 243, .08)"
            borderRadius={"0px 30px 30px 30px"}
          >
            <Flex direction={"row"} justify={"space-between"} pr={2}>
              <Flex direction={"column"} p={4}>
                <Text px={2} fontSize={10}>
                  Qty
                </Text>
              </Flex>
              <Flex direction={"column"} p={4}>
                <Text px={2} fontSize={10}>
                  Rate
                </Text>
              </Flex>
              <Flex direction={"column"} p={4}>
                <Text px={2} fontSize={10}>
                  Amount
                </Text>
              </Flex>
            </Flex>
            <Divider
              w="96%"
              borderWidth={0.5}
              borderColor={"gray.500"}
              mr={12}
            />
            <Flex direction={"row"} justify={"space-between"} pr={2}>
              <Flex direction={"column"} p={4}>
                <Text px={2} fontSize={10}>
                  1
                </Text>
              </Flex>
              <Flex direction={"column"} p={4}>
                <Text px={2} fontSize={10}>
                  ₹$$Total$$
                </Text>
              </Flex>
              <Flex direction={"column"} p={4}>
                <Text px={2} fontSize={10}>
                  ₹$$Total$$
                </Text>
              </Flex>
            </Flex>
            <Divider
              w="96%"
              borderWidth={0.5}
              borderColor={"gray.500"}
              mb={2}
              mr={12}
            />
            <Flex direction={"row"} justify={"space-between"} pr={2} pb={1}>
              <Flex direction={"column"} p={4}>
                <Text px={2} fontSize={12}>
                  Total
                </Text>
              </Flex>
              <Flex direction={"column"} p={4}>
                <Text px={2} fontSize={12}>
                  ₹$$Total$$
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex direction={"row"} justify={"space-between"}>
          <Flex w="50%" />
          <Flex
            direction={"row"}
            borderRadius={"30px"}
            bg="#3598F3"
            w="50%"
            justify={"space-between"}
          >
            <Text
              fontSize={24}
              fontWeight={"bold"}
              p={4}
              pl={8}
              textColor={"white"}
            >
              Total Paid
            </Text>
            <Text
              fontSize={24}
              fontWeight={"bold"}
              p={4}
              pr={8}
              textColor={"white"}
            >
              ₹$$Total$$
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex direction={"row"} pb={4}>
        <Flex w="50%" />
        <Flex
          w="50%"
          bg="rgba(53, 152, 243, .08)"
          borderRadius={"30px"}
          direction={"column"}
          p={4}
          px={8}
          mx={4}
          mr={8}
        >
          <Text fontSize={10}>Payment details</Text>
          <Text fontSize={10}>Mode: Online</Text>
          <Text fontSize={10}>$$Email$$</Text>
          <Text fontSize={10}>$$Mobile$$</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Invoice;
