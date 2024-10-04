import SectionLayout from "../../Layouts/SectionLayout";
import SectionTitle from "../../Elements/SectionTitle";
import TestimoniLayout from "../../Layouts/TestimoniLayout";
const TestimoniSection = () => {
  return (
    <SectionLayout classname="flex flex-col justify-center items-center gap-8 lg:gap-16 xl:gap-20">
      <SectionTitle title={"Testimoni Pelanggan"} classname={`self-start`} />
      <div className="relative flex flex-col lg:flex-row justify-center items-center gap-8 ">
        <div className="w-[266px] h-[135px] md:w-[380px] md:h-[257px] lg:w-[427px] lg:h-[216px] lg:absolute lg:left-80 xl:left-52 z-50">
          <img src="images/home/testimoni.png" alt="" className="object-fill" />
        </div>
        <TestimoniLayout />
      </div>
    </SectionLayout>
  );
};

export default TestimoniSection;
