import Footer from "./components/footer/";
import HeroSection from "./components/heroSection/";
import PackagesSection from "./components/PackagesSection/";
import PopularDestinations from "./components/PopularDestinations/";
import TrustSection from "./components/TrustSection";
import WhyChooseUs from "./components/whyChooseUs/";
import NewsLetter from "./components/NewsLetter/";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <WhyChooseUs />
      <TrustSection />
      <PopularDestinations />
      <PackagesSection />
      <NewsLetter />
      <Footer />
    </div>
  );
}
