import { SEOWrapper } from "@/components/SEO";
import {
  Box,
  chakra,
  ListItem,
  OrderedList,
  useColorModeValue,
} from "@chakra-ui/react";

const TOS = () => {
  return (
    <SEOWrapper title="Reticulo Terms of Service">
      <Box px={4} py={16} mx="auto">
        <Box w={{ base: "full" }} mx="auto" maxW="3xl">
          <chakra.h1
            mb={3}
            fontSize={{ base: "3xl", md: "4xl" }}
            fontWeight={{ base: "bold", md: "extrabold" }}
            color={useColorModeValue("gray.900", "gray.100")}
            lineHeight="shorter"
          >
            Terms of Service
          </chakra.h1>

          <chakra.p py={2}>
            These Terms of Service (“Terms”) govern your use of all our products
            (“Product”), including any updates or new features that we may add
            from time to time. By using the Product, you agree to be bound by
            these Terms.
          </chakra.p>

          <OrderedList>
            <ListItem>
              Use of Product: You may use the Product only for lawful purposes
              and in accordance with these Terms. You are solely responsible for
              your use of the Product and for any content that you submit or
              upload to the Product.
            </ListItem>
            <ListItem>
              Intellectual Property: The Product, including all intellectual
              property rights therein, are owned by us or our licensors and are
              protected by copyright, trademark, and other laws. You may not use
              any content from the Product without our express written
              permission.
            </ListItem>
            <ListItem>
              Roles and Responsibilities: Our platform acts as a facilitator
              between players and coaches. Players can use the Product to pay
              their coach’s fees and the app fee (charged by us) in a single
              transaction. We are not a service provider for coaching and are
              not responsible for coaching quality, cancellations, or disputes.
            </ListItem>
            <ListItem>
              Payments and Fees: By using the platform, you agree to pay: The
              coach’s fee, which is collected on the coach’s behalf and passed
              through. The app/platform fee, which is retained by us. We use a
              licensed Payment Aggregator for all transactions. You may receive
              a payment receipt showing the full amount paid. advance.
            </ListItem>
            <ListItem>
              Refunds: Refunds for the app fee are handled solely by us, and
              only under specific exceptions outlined in our Cancellation &
              Refund Policy. Refunds for coach fees are not our responsibility
              and must be resolved directly with the coach.
            </ListItem>
            Privacy: We are committed to protecting your privacy and personal
            information. Our Privacy Policy describes our practices regarding
            the collection, use, and sharing of your personal information. By
            using the Product, you agree to our Privacy Policy.
            <ListItem>
              Termination: We may terminate or suspend your access to the
              Product at any time and without notice for any reason, including,
              without limitation, breach of these Terms or suspected fraudulent,
              abusive, or illegal activity. Upon termination, your right to use
              the Product will immediately cease.
            </ListItem>
            <ListItem>
              Disclaimer of Warranties: The Product is provided on an “as is”
              and “as available” basis. We make no representations or warranties
              of any kind, express or implied, regarding the operation or use of
              the Product, including, but not limited to, any warranties of
              merchantability, fitness for a particular purpose, or
              non-infringement.
            </ListItem>
            <ListItem>
              Limitation of Liability: We will not be liable for any direct,
              indirect, incidental, special, consequential, or punitive damages
              arising out of or in connection with your use of the Product, even
              if we have been advised of the possibility of such damages. Our
              total liability to you for any claims arising out of or in
              connection with these Terms or your use of the Product shall not
              exceed the amount paid by you for the Product in the 12 months
              prior to the event giving rise to the claim.
            </ListItem>
            <ListItem>
              Governing Law and Jurisdiction: These Terms and your use of the
              Product will be governed by and construed in accordance with the
              laws of the jurisdiction in which we are located, without giving
              effect to any principles of conflicts of law. Any legal action or
              proceeding arising out of or in connection with these Terms or
              your use of the Product will be brought in the courts of the
              jurisdiction in which we are located.
            </ListItem>
            <ListItem>
              Modifications: We reserve the right to modify these Terms at any
              time without prior notice. Your continued use of the Product after
              any such changes indicates your acceptance of the updated Terms.
            </ListItem>
          </OrderedList>
        </Box>
      </Box>
    </SEOWrapper>
  );
};

export default TOS;
