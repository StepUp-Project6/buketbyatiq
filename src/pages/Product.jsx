import Navbar from '../components/Fragments/Navbar'
import AboutSection from "../components/Sections/Product/AboutSection";
import BuketSection from "../components/Sections/Product/BuketSection";
import QuotesSection from '../components/Sections/Product/QuotesSection';

const Product = () => {
  return (
    <>
      <Navbar />
      <AboutSection></AboutSection>
      <BuketSection></BuketSection>
      <QuotesSection></QuotesSection>
    </>
  )
}

export default Product