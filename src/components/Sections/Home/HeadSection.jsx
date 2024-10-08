import RedirectButton from "../../Elements/RedirectButton";
import SectionLayout from "../../Layouts/SectionLayout";

const HeadSection = () => {
  return (
    <SectionLayout
      classname={`flex flex-col md:flex-row md:justify-between bg-[#DBD1BC]/20`}
    >
      <div className="flex flex-col justify-center items-center md:items-start md:w-[50%] lg:pt-[60px] lg:pb-24 xl:pb-32 xl:pt-[100px]">
        <h1
          className={`text-2xl md:text-4xl lg:text-6xl xl:text-[70px] text-center md:text-start  lg:leading-none font-bold font-playfair text-primary w-[175px] md:w-full xl:w-[514px] md:pr-20 lg:pr-0`}
        >
          Selamat Datang di Buket Byatiq
        </h1>
        <p className="text-xs md:text-sm lg:text-xl font-normal font-timesNewRoman text-center md:text-start mt-5 lg:mt-8 xl:mt-14 md:pr-7 lg:pr-0 w-[300px] lg:w-[450px] xl:w-[555px]">
          Buket Byatiq berdedikasi untuk menciptakan buket yang tidak hanya
          indah tapi juga memiliki makna dan nilai sentimental yang tinggi.
        </p>
        <div className="pt-12 flex flex-col lg:gap-4 lg:flex-row lg:justify-items-center lg:items-center">
          <div className="mb-4 lg:pt-8 flex lg:justify-center lg:items-center">
            <RedirectButton
              name={"Beli Produk"}
              to={"/produk#product"}
              classname={`px-8 py-3 lg:px-9 lg:py-4 text-xs md:text-sm lg:text-lg font-bold font-timesNewRoman tracking-wider bg-primary text-white rounded-[10px]`}
            />
          </div>
          <div className="mt-4 flex lg:justify-center lg:items-center">
            <RedirectButton
              name={"Produk"}
              to={"/produk"}
              classname={`px-11 py-3 md:px-[46px] lg:px-[54px] lg:py-4 text-xs md:text-sm lg:text-lg font-bold font-timesNewRoman tracking-wider bg-white border-2 border-primary  text-primary rounded-[10px]`}
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 items-end pt-16 md:w-[50%] lg:w-[45%] lg:pb-24 xl:pb-32">
        <div className="w-[150px] h-[223px] lg:w-[180px] lg:h-[286px] xl:w-[215px] xl:h-[321px] justify-self-start xl:justify-self-end content-end">
          <img src="images/home/head-1.png" alt="" className="object-fill" />
        </div>
        <div className="w-[150px] h-[282px] lg:w-[180px] lg:h-[369px] xl:w-[215px] xl:h-[404px] justify-self-end content-end">
          <img src="images/home/head-2.png" alt="" className="object-fill" />
        </div>
      </div>
    </SectionLayout>
  );
};

export default HeadSection;
