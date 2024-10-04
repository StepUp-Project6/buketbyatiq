<SectionLayout classname="relative h-[246px] md:h-[196px] lg:h-[196px] flex items-center justify-center md:block bg-cover bg-center">
  {/* Gambar background untuk mobile dan desktop */}
  <img src="/images/bgmobile.png" alt="" className="md:hidden absolute -z-20 inset-0 object-cover" />
  <img src="/images/quotes.png" alt="" className="hidden md:block absolute -z-20 inset-0 object-cover" />

  {/* Konten teks dan tombol */}
  <div className="relative z-10 flex flex-col items-center md:items-start justify-center max-w-2xl text-center md:text-left px-4 md:pl-2 lg:pl-4 gap-4 md:gap-2 lg:gap-5">
    {/* Title dengan margin-top 50px */}
    <SectionTitle title="Buket Byatiq" classname="text-center md:text-left text-[24px] md:text-[32px] lg:text-[40px]" />

    {/* Paragraph */}
    <Paragraph content="Setiap momen layak dirayakan dengan buket yang penuh makna. Buket Byatiq, lebih dari sekadar buket—berikan keindahan yang mengabadikan kenangan." />

    {/* Tombol dengan margin-bottom 46px */}
    <button className="mt-4 px-5 md:px-6 lg:px-7 py-2 md:py-3 lg:py-4 bg-[#193446] text-white text-sm md:text-base lg:text-lg rounded-[10px] shadow-md">
      Beli Produk
    </button>
  </div>
</SectionLayout>
