import Navbar from '../components/Fragments/Navbar'
import AboutSection from "../components/Sections/Product/AboutSection";
import BuketSection from "../components/Sections/Product/BuketSection";
import QuotesSection from '../components/Sections/Product/QuotesSection';
import TestimoniSection from "../components/Sections/Home/TestimoniSection";
import Footer from "../components/Fragments/Footer";

const Product = () => {
  return (
    <>
      <Navbar />
      <AboutSection></AboutSection>
      <BuketSection></BuketSection>
      <QuotesSection></QuotesSection>
      <TestimoniSection></TestimoniSection>
      <Footer></Footer>
    </>
  )
}

export default Product