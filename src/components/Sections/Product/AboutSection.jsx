import Paragraph from "../../Elements/Paragraph";
import SectionTitle from "../../Elements/SectionTitle";
import SectionLayout from "../../Layouts/SectionLayout";

const AboutSection = () => {
  return (
    <>
      <SectionLayout classname={`flex flex-col justify-center md:flex-row-reverse`}>
        <div className="flex flex-col md:pl-10">
          <SectionTitle title={"Tentang Produk"} />
          <Paragraph
            content={
              "merupakan sebuah bisnis yang bergerak di bidang pembuatan buket yang unik dan eksklusif untuk berbagai acara perayaan seperti ulang tahun, wisuda, dan lain-lain. Buket Byatiq menawarkan berbagai jenis buket yang dapat disesuaikan dengan tema dan selera pelanggan, mulai dari buket polaroid yang Instagram-worthy, buket topper yang elegan, buket coklat yang lezat, buket bunga yang segar, buket boneka yang imut, hingga buket bunga yang eksklusif."
            }
            classname="my-5"
          />
        </div>
        <div className="flex items-center md:min-w-[232px] md:h-[212px] lg:min-w-[337px] lg:h-[302px] xl:min-w-[428px] xl:h-[377px]">
          <img src="images/home/image-2.png" className="object-fill w-full h-full" alt="" />
        </div>
      </SectionLayout>
    </>
  );
};

export default AboutSection;
