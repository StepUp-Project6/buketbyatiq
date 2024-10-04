import SectionLayout from "../../Layouts/SectionLayout";

const FirstSection = () => {
  return (
    <SectionLayout
      classname={`flex flex-col md:flex-row md:justify-between bg-[#DBD1BC]/20 py-14 `}
    >
      <section className="flex flex-col justify-center items-center md:items-start md:w-[50%] lg:pt-[20px] xl:pt-[0px] xl:w-[60%]">
        <h1
          className={`text-2xl px-4 md:px-0 md:text-4xl lg:text-[36px] text-center  md:md:text-start  lg:leading-none font-bold font-playfair text-primary 
          w-[175px]  md:md:w-full xl:text-[48px] xl:w-[514px]  md:pr-20 lg:pr-0`}
        >
          Temukan Buket Byatiq
        </h1>
        <p
          className="text-xs mt-6 px-2 md:text-sm lg:text-xl font-normal font-timesNewRoman text-center md:text-start lg:mt-8 xl:mt-7 md:pr-7 lg:pr-0 w-[300px] lg:w-[450px]
         xl:text-[22px] xl:px-0 xl:w-[605px]"
        >
          Temukan dan pesan buket eksklusif pilihan Anda di Buket Byatiq melalui
          media sosial kami! Dari polaroid hingga bunga segar, buat momen
          spesial Anda lebih berkesan.
        </p>
        {/* SOSMED */}
        <div
          className="grid grid-cols-2 place-items-center gap-3 px-8 w-full mt-8 hp375:px-10 
        md:px-0 md:place-items-start md:pe-14 xl:gap-6"
        >
          <div className="flex items-center gap-2 w-[110px] xl:w-[180px]">
            <a href="https://www.instagram.com/buket_byatiq" target="_blank">
              <img
                src="svg/instagram.svg"
                alt="ig icon"
                className="w-[25px] h-[25px] xl:w-[40px] xl:h-[40px]"
              />
            </a>
            <p className="text-xs xl:text-[20px]">buket_byatiq</p>
          </div>
          <div className="flex items-center gap-2 w-[110px] xl:w-[180px]">
            <a href="https://www.tiktok.com/@buket_byatiq" target="_blank">
              <img
                src="svg/tiktok.svg"
                alt="tiktok icon"
                className="w-[25px] h-[25px] xl:w-[40px] xl:h-[40px]"
              />
            </a>
            <p className="text-xs xl:text-[20px]">buket_byatiq</p>
          </div>
          <div className="flex items-center gap-2 w-[110px] xl:w-[180px]">
            <a
              href="https://www.facebook.com/titik.thututthayanxthidia?locale=id_ID"
              target="_blank"
            >
              <img
                src="svg/facebook.svg"
                alt="ig icon"
                className="w-[25px] h-[25px] xl:w-[40px] xl:h-[40px]"
              />
            </a>
            <p className="text-xs xl:text-[20px]">Titik Purnama</p>
          </div>
          <div className="flex items-center gap-2 w-[110px] xl:w-[180px]">
            <a
              href="https://shopee.co.id/atik1933?entryPoint=ShopBySearch&searchKeyword=buket_byatiq"
              target="_blank"
            >
              <img
                src="svg/shoppe.svg"
                alt="shoppe icon"
                className="w-[25px] h-[25px] xl:w-[40px] xl:h-[40px]"
              />
            </a>
            <p className="text-xs xl:text-[20px]">buket_byatiq</p>
          </div>
          <div className="flex items-center gap-2 w-[110px] xl:w-[180px]">
            <a href="https://Wa.me/6282124726241" target="_blank">
              <img
                src="svg/whatsapp.svg"
                alt="whatsapp icon"
                className="w-[25px] h-[25px] xl:w-[40px] xl:h-[40px]"
              />
            </a>
            <p className="text-xs xl:text-[20px]">082124726241</p>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-2 items-end mt-6 md:w-[50%] lg:w-[45%] lg:mt-0 lg:pb-24 xl:w-[35%] xl:place-items-end xl:pt-[40px]">
        <div className="w-[150px] h-[223px] lg:w-[180px] lg:h-[286px] xl:w-[215px] xl:h-[321px] justify-self-start xl:justify-self-end content-end">
          <img src="images/home/head-1.png" alt="" className="object-fill" />
        </div>
        <div className="w-[150px] h-[282px] lg:w-[180px] lg:h-[369px] xl:w-[215px] xl:h-[404px] justify-self-end content-end">
          <img src="images/home/head-2.png" alt="" className="object-fill" />
        </div>
      </section>
    </SectionLayout>
  );
};

export default FirstSection;
