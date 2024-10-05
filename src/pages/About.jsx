import Navbar from "../components/Fragments/Navbar";
import Footer from "../components/Fragments/Footer";
import FirstSection from "../components/Sections/About/FirstSection";
import FixedButtonWhatsapp from "../components/Fragments/FixedButtonWhatsapp";
import DocumentationSection from "../components/Sections/Home/DocumentationSection";

const About = () => {
  return (
    <>
      <Navbar classname={`bg-[#DBD1BC]/20`} />
      <main id="main" className="relative min-h-screen md:pb-20 lg:pb-0">
        <FirstSection />
        <DocumentationSection />
        <FixedButtonWhatsapp /> 
      </main>
      <Footer />
    </>
  );
};

export default About;
