import Product from "@/components/Product";
import { Section } from "@/components/Product/Section";
import { chakra, Icon, useColorModeValue } from "@chakra-ui/react";
import { FeatureType, ItemPlacement } from "data/types";
import { BsFillGearFill } from "react-icons/bs";

const TrainEx = () => {
  return (
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
      simpleDescription={"Sensor based Training Equipments"}
      description={
        "These equipments have sensors that track your performance in training to give useful insights about fitness levels and efforts put in training."
      }
      sections={[
        <Section
          key={0}
          name="How it Works"
          description="AI Based Analysis"
          featurePlacement={ItemPlacement.RIGHT}
          featureType={FeatureType.YOUTUBE_VIDEO}
          featureUrl="https://www.youtube.com/embed/nI4axFAvBdM"
        />,
        <Section
          key={1}
          name="How it Works"
          description="AI Based Analysis"
          featurePlacement={ItemPlacement.LEFT}
          featureType={FeatureType.IMAGE}
          featureUrl="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
        />,
      ]}
    />
  );
};

export default TrainEx;
