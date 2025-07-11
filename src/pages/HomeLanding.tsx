import { FeaturedSection } from "../components/FeaturedSection";
import { HeaderSection } from "../components/HeaderSection";

export const HomeLanding = () => {
  return (
    <div className="bg-landing h-fit max-h-screen w-screen">
      <HeaderSection />
      <FeaturedSection />
    </div>
  );
};
