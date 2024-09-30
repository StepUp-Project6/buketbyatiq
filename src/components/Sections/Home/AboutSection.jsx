import Paragraph from "../../Elements/Paragraph";
import SectionTitle from "../../Elements/SectionTitle";
import SectionLayout from "../../Layouts/SectionLayout";

const AboutSection = () => {
  return (
    <>
      <SectionLayout classname={`flex flex-col justify-center md:flex-row-reverse`}>
        <div className="flex flex-col md:pl-10">
          <SectionTitle title={"Tentang Kami"} />
          <Paragraph
            content={
              "merupakan sebuah bisnis yang bergerak di bidang pembuatan buket yang unik dan eksklusif untuk berbagai acara perayaan seperti ulang tahun, wisuda, dan lain-lain. Buket Byatiq menawarkan berbagai jenis buket yang dapat disesuaikan dengan tema dan selera pelanggan, mulai dari buket polaroid yang Instagram-worthy, buket topper yang elegan, buket coklat yang lezat, buket bunga yang segar, buket boneka yang imut, hingga buket bunga yang eksklusif."
            }
            classname="my-5"
          />
        </div>
        <div className="flex items-center ">
          <img src="images/home/image-1.png" className="lg:min-w-[337px] lg:h-[324px]" alt="" />
        </div>
      </SectionLayout>
    </>
  );
};

export default AboutSection;
