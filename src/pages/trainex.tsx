import Product from "@/components/Product";
import { Section } from "@/components/Product/Section";
import { SEOWrapper } from "@/components/SEO";
import { chakra, Icon, useColorModeValue } from "@chakra-ui/react";
import { FeatureType, ItemPlacement } from "data/types";
import { BsFillGearFill } from "react-icons/bs";

const TrainEx = () => {
  return (
    <SEOWrapper title="Reticulo | TrainEx">
      <Product
      name={"TrainEx"}
      icon={
        <Icon
          boxSize={8}
          aria-hidden="true"
          as={BsFillGearFill}
          color={useColorModeValue("white", "gray.900")}
        />
      }
      simpleDescription={"Smart Sensor based Training Equipments"}
      description={
        "These equipments have sensors that track your performance in training to give useful insights about fitness levels and efforts put in training."
      }
      sections={[
        <Section
          key={0}
          name="IoT based"
          description="These Smart Sensor based systems control how much effort you put in training"
          featurePlacement={ItemPlacement.RIGHT}
          featureType={FeatureType.IMAGE}
          featureUrl="/TrainEx/trainex.jpg"
        />,
        <Section
          key={1}
          name="Self Learning Algorithm"
          description="Training System understands player's body fitness level and adjusts difficulty accordingly"
          featurePlacement={ItemPlacement.LEFT}
          featureType={FeatureType.IMAGE}
          featureUrl="/TrainEx/Learning.png"
        />,
      ]}
    />
    </SEOWrapper>
  );
};

export default TrainEx;
