import { SEOWrapper } from "@/components/SEO";
import { Box, chakra, useColorModeValue } from "@chakra-ui/react";

const CancellationPolicy = () => {
  return (
    <SEOWrapper title="Reticulo Cancellation and Refund Policy">
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
            Cancellation (Radlo Subscription Fees)
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
            Refunds for Radlo Subscription Fees
          </chakra.p>

          <chakra.p py={2}>
            All app fee payments are final and non-refundable. Exceptions may be
            made at our sole discretion in the following cases: Duplicate
            charges or technical billing errors Technical issues preventing
            access to our platform that we cannot resolve Refund requests must
            be made within 7 days of the transaction.
          </chakra.p>

          <chakra.p
            my={4}
            fontSize={{ base: "lg", md: "xl" }}
            lineHeight="base"
            fontWeight={{ base: "bold", md: "extrabold" }}
          >
            Coach Fee Refunds
          </chakra.p>

          <chakra.p py={2}>
            Fees paid to coaches are handled directly between the player and
            coach. We are not responsible for coaching service quality,
            cancellations, no-shows, or refunds. Players must resolve all coach
            fee-related issues with the coach directly.
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
