import SectionTitle from "../../Elements/SectionTitle"
import SectionLayout from "../../Layouts/SectionLayout"

const DocumentationSection = () => {
  return (
    <SectionLayout classname="mb-10 lg:mb-24">
      <SectionTitle title={"Dokumentasi"} />
      <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-between  gap-10 md:gap-52 lg:gap-10 pt-10 lg:pt-20">
        <div className="w-[279px] h-[209px] md:w-[427px] md:h-[319px] lg:w-[369px] lg:h-[278px] xl:w-[502px] xl:min-h-[378px] flex flex-col justify-center items-center gap-2.5">
            <img src="images/dokumentasi/dok1.png" alt="" className="object-fill"/>
            <p className="font-bold font-playfair text-xs md:text-lg xl:text-xl">Konsultasi Meja Bundar</p>
        </div>
        <div className="w-[279px] h-[372px] md:w-[427px] md:h-[319px] lg:w-[207px] lg:h-[278px] xl:w-[282px] xl:h-[378px] flex flex-col justify-center items-center gap-2.5">
            <img src="images/dokumentasi/dok2.png" alt="" className="object-fill"/>
            <p className="font-bold font-playfair text-xs md:text-lg xl:text-xl">Bazar Wisuda</p>
        </div>
        <div className="w-[279px] h-[372px] md:w-[427px] md:h-[319px] lg:w-[207px] lg:h-[278px] xl:w-[282px] xl:h-[378px] flex flex-col justify-center items-center gap-2.5 md:mt-32 lg:mt-0">
            <img src="images/dokumentasi/dok3.png" alt="" className="object-fill"/>
            <p className="font-bold font-playfair text-xs md:text-lg xl:text-xl">Seminar Kewirausahaan</p>
        </div>
      </div>
    </SectionLayout>
  )
}

export default DocumentationSection