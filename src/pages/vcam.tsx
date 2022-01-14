import Product from "@/components/Product";
import { Section } from "@/components/Product/Section";
import { SEOWrapper } from "@/components/SEO";
import { chakra, Icon, useColorModeValue } from "@chakra-ui/react";
import { FeatureType, ItemPlacement } from "data/types";
import { BsCameraVideoFill } from "react-icons/bs";

const VCam = () => {
  return (
    <SEOWrapper title="Reticulo | VCam">
    <Product
      name={"Vison Smart Camera"}
      icon={
        <Icon
          boxSize={8}
          aria-hidden="true"
          as={BsCameraVideoFill}
          color={useColorModeValue("white", "gray.900")}
        />
      }
      simpleDescription={"High Quality Imaging and Video Recording"}
      description={
        "Low cost High Quality Smart Camera that can do heavy processing and record your videos."
      }
      sections={[
        <Section
          key={0}
          name="Machine Vision"
          description="VCam comes with a High Quality Image sensor which records upto 1080p @ 60 fps and has fast computation units (VPU) built-in which are compatible with Reticulo's Studio AI"
          featurePlacement={ItemPlacement.RIGHT}
          featureType={FeatureType.IMAGE}
          featureUrl="/VCam/rpi-camera.jpg"
        />,
        <Section
          key={1}
          name="On Edge Analysis"
          description="This Smart Camera carries out analysis which can be performed by Reticulo's Studio AI without drawing too much power"
          featurePlacement={ItemPlacement.LEFT}
          featureType={FeatureType.IMAGE}
          featureUrl="/VCam/editor-2.png"
        />,
      ]}
    />
    </SEOWrapper>
  );
};

export default VCam;
