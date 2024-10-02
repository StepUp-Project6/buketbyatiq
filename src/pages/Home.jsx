import Navbar from "../components/Fragments/Navbar";
import AboutSection from "../components/Sections/Home/AboutSection";
import HeadSection from "../components/Sections/Home/HeadSection";
import ProductSection from "../components/Sections/Home/ProductSection";

const Home = () => {
  return (
    <>
      <Navbar classname={`bg-[#DBD1BC]/20`} />
      <HeadSection></HeadSection>
      <AboutSection></AboutSection>
      <ProductSection></ProductSection>
    </>
  );
};

export default Home;
