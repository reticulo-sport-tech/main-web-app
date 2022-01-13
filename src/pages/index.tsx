import { SEOWrapper } from "@/components/SEO";
import MainCTA from "@/components/main/MainCTA";
import MainEcosystemBrief from "@/components/main/MainEcosystemBrief";
import MainEcosystem from "@/components/main/MainEcosystem";
import MainUSP from "@/components/main/MainUSP";
import MainTestimonials from "@/components/main/MainTestimonials";

const Home = () => {
  return (
    <SEOWrapper>
      <MainCTA />
      <MainEcosystemBrief />
      <MainEcosystem />
      <MainUSP />
      <MainTestimonials />
    </SEOWrapper>
  );
};

export default Home;
