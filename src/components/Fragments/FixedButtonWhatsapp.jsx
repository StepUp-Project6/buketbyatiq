import React from "react";

const FixedButtonWhatsapp = () => {
  return (
    <a
      href="https://wa.me/6282124726241"
      target="_blank"
      className="fixed bottom-5 right-6 flex items-center gap-3 z-50 font-playfair"  
    >
      <div className="text-xs bg-[#4BCA5A] h-[35px] flex items-center justify-center rounded-md text-white font-bold px-4 py-0 shadow-inner shadow-black/30">
        Pesan Sekarang
      </div>
        <img src="svg/whatsapp-2.svg" alt="" className="h-[38px] w-[38px]" />
    </a>
  );
};

export default FixedButtonWhatsapp;
