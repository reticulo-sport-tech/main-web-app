import { SEOWrapper } from "@/components/SEO";
import { Box, chakra, useColorModeValue } from "@chakra-ui/react";

const CancellationPolicy = () => {
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
            Our Cancellation Policy
          </chakra.h1>
          <chakra.p
            mb={4}
            fontSize={{ base: "lg", md: "xl" }}
            lineHeight="base"
            fontWeight={{ base: "bold", md: "extrabold" }}
          >
            Cancellation
          </chakra.p>

          <chakra.p py={2}>
            If you wish to cancel your subscription, you may do so at any time
            by contacting our support team. Your cancellation will take effect
            at the end of your current billing period. We do not offer refunds
            for any unused portion of your subscription.
          </chakra.p>

          <chakra.p
            my={4}
            fontSize={{ base: "lg", md: "xl" }}
            lineHeight="base"
            fontWeight={{ base: "bold", md: "extrabold" }}
          >
            Refunds
          </chakra.p>

          <chakra.p py={2}>
            As stated above, all sales are final, and we do not offer refunds
            for any reason. This includes, but is not limited to, technical
            issues, dissatisfaction with the product, or changes in your
            business needs.
          </chakra.p>

          <chakra.p
            my={4}
            fontSize={{ base: "lg", md: "xl" }}
            lineHeight="base"
            fontWeight={{ base: "bold", md: "extrabold" }}
          >
            Exceptions
          </chakra.p>

          <chakra.p py={2}>
            In rare cases, we may consider offering a refund at our sole
            discretion. These exceptions may include technical issues that we
            are unable to resolve or circumstances beyond your control that
            prevent you from using our product. However, any such refund would
            be at our sole discretion and not a guarantee.
          </chakra.p>

          <chakra.p py={2}>
            We reserve the right to modify this policy at any time without prior
            notice. Your continued use of our product after any such changes
            indicates your acceptance of the updated policy.
          </chakra.p>

          <chakra.p py={2}>
            Thank you for your understanding of our policy. If you have any
            questions or concerns, please feel free to contact our support team
            for assistance.
          </chakra.p>
        </Box>
      </Box>
    </SEOWrapper>
  );
};

export default CancellationPolicy;
