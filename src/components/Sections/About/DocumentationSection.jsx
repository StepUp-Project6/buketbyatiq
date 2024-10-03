import SectionLayout from "../../Layouts/SectionLayout";

const DocumentationSection = () => {
  return (
    <SectionLayout classname="py-0 pb-8">
      <h1 className="my-5 text-base font-bold font-playfair">Dokumentasi</h1>
      <div className="px-5 font-playfair">
        <div className="mt-2">
          <img src="images/about/about-dokumentasi-1.png" alt="dokumentasi 1" className="w-full" />
          <p className="text-xs mt-3 font-bold text-center">Konsultasi Meja Bundar</p>
        </div>
        <div className="mt-6">
          <img src="images/about/about-dokumentasi-2.png" alt="dokumentasi 2" className="w-full" />
          <p className="text-xs mt-3 font-bold text-center">Bazar Wisuda</p>
        </div>
        <div className="mt-6">
          <img src="images/about/about-dokumentasi-3.png" alt="dokumentasi 3" className="w-full" />
          <p className="text-xs mt-3 font-bold text-center">Seminar Kewirausahaan</p>
        </div>
      </div>
    </SectionLayout>
  );
};

export default DocumentationSection;
