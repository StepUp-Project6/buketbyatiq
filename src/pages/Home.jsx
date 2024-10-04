import Navbar from "../components/Fragments/Navbar";
import AboutSection from "../components/Sections/Home/AboutSection";
import DocumentationSection from "../components/Sections/Home/DocumentationSection";
import HeadSection from "../components/Sections/Home/HeadSection";
import ProductSection from "../components/Sections/Home/ProductSection";
import TestimoniSection from "../components/Sections/Home/TestimoniSection";

const Home = () => {
  return (
    <>
      <Navbar classname={`bg-[#DBD1BC]/20`} />
      <HeadSection></HeadSection>
      <AboutSection></AboutSection>
      <ProductSection></ProductSection>
      <DocumentationSection />
      <TestimoniSection></TestimoniSection>
    </>
  );
};

export default Home;
