import { SEOWrapper } from "@/components/SEO";
import { Box, chakra, useColorModeValue } from "@chakra-ui/react";

const PrivacyPolicy = () => {
  return (
    <SEOWrapper title="Reticulo Privacy Policy">
      <Box px={4} py={16} mx="auto">
        <Box w={{ base: "full" }} mx="auto" maxW="3xl">
          <chakra.h1
            mb={3}
            fontSize={{ base: "3xl", md: "4xl" }}
            fontWeight={{ base: "bold", md: "extrabold" }}
            color={useColorModeValue("gray.900", "gray.100")}
            lineHeight="shorter"
          >
            Our Privacy Policy
          </chakra.h1>
          <chakra.p
            mb={4}
            fontSize={{ base: "lg", md: "xl" }}
            lineHeight="base"
            fontWeight={{ base: "bold", md: "extrabold" }}
          >
            General rules
          </chakra.p>

          <chakra.p py={2}>
            Reticulo Sport Techonology does not share personal information of
            any kind with anyone. We will not sell or rent your name or personal
            information to any third party.
          </chakra.p>

          <chakra.p py={2}>
            We do not sell, rent or provide outside access to our mailing list
            or any data we store. Any data that a user stores via our website is
            wholly owned by that user or business.
          </chakra.p>

          <chakra.p py={2}>
            At any time a user or business is free to take their data and leave,
            or to simply delete their data from our website.
          </chakra.p>

          <chakra.p py={2}>
            Reticulo Sport Techonology only collects such personal information
            that is necessary for you to access and use our services. This
            personal information includes, but is not limited to, first and last
            name, email address, mobile number, billing information, and
            transaction details.
          </chakra.p>

          <chakra.p py={2}>
            Payment Information: All payment processing is securely managed by a
            licensed Payment Aggregator. We do not store any card, UPI, or bank
            details. The payment aggregator complies with RBI and PCI-DSS
            regulations for secure handling of payment data.
          </chakra.p>

          <chakra.p py={2}>
            {`Reticulo Sport Techonology may release personal information if
            Reticulo Sport Techonology is required to by law, search warrant,
            subpoena, court order or fraud investigation.`}
          </chakra.p>

          <chakra.p py={2}>
            If we change our terms of use we will post those changes on this
            page. Registered users will be sent an email that outlines changes
            made to the terms of use.
          </chakra.p>
        </Box>
      </Box>
    </SEOWrapper>
  );
};

export default PrivacyPolicy;
