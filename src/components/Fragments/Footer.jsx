import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative w-full font-timesNewRoman xl:h-[100px]">
      <img
        src="/images/footer/footer-background-mobile.png"
        alt="footer bg"
        className="absolute w-full -z-50 md:hidden"
      />
      <img
        src="/images/footer/footer-background-dekstop.png"
        alt="footer bg"
        className="hidden absolute w-full -z-50 md:block xl:hidden"
      />
      <img
        src="/images/footer/footer-background-dekstop-2.png"
        alt="footer bg"
        className="hidden absolute w-full -z-50 xl:block"
      />
      <div className="w-full p-[30px] xl:px-28 xl:py-12">
        <section className="flex flex-col items-center gap-2 w-full text-white md:flex-row md:justify-center md:gap-6 xl:gap-9">
          <Link to="/">
            <p className="text-xs tracking-[4px] md:text-[14px] lg:text-[18px] xl:text-[20px]">
              BERANDA
            </p>
          </Link>
          <div className="w-2 h-2 bg-[#DBD1BC] rounded-full"></div>
          <Link to="/produk">
            <p className="text-xs tracking-[4px] md:text-[14px] lg:text-[18px] xl:text-[20px]">
              PRODUK
            </p>
          </Link>
          <div className="w-2 h-2 bg-[#DBD1BC] rounded-full"></div>
          <Link to="/tentang-kami">
            <p className="text-xs tracking-[4px] md:text-[14px] lg:text-[18px] xl:text-[20px]">
              TENTANG KAMI
            </p>
          </Link>
        </section>
        <section className="w-full mt-6 md:flex md:flex-row-reverse md:px-7 xl:px-16 xl:mt-16">
          <div className="flex flex-col items-center md:flex-row md:w-[65%] md:justify-between md:items-start xl:w-[70%]">
            {/* SOSMED */}
            <div className="md:w-[45%]  md:flex md:flex-col md:items-center">
              <h1 className="text-[24px] font-extrabold text-[#DBD1BC] lg:text-[36px] xl:text-[48px]">
                Buket Byatiq
              </h1>
              <div className="flex gap-4 justify-center mt-2 md:mt-10 lg:gap-5">
                <a
                  href="https://www.instagram.com/buket_byatiq"
                  target="_blank"
                >
                  <img
                    src="svg/footer-instagram.svg"
                    alt="icon ig"
                    className="w-[25px] lg:w-[40px]"
                  />
                </a>
                <a
                  href="https://www.facebook.com/titik.thututthayanxthidia?locale=id_ID"
                  target="_blank"
                >
                  <img
                    src="svg/footer-facebook.svg"
                    alt="icon fb"
                    className="w-[25px] lg:w-[40px]"
                  />
                </a>
                <a
                  href="https://shopee.co.id/atik1933?entryPoint=ShopBySearch&searchKeyword=buket_byatiq"
                  target="_blank"
                >
                  <img
                    src="svg/footer-shoppe.svg"
                    alt="icon sp"
                    className="w-[25px] lg:w-[40px]"
                  />
                </a>
              </div>
            </div>
            {/* TEKS INFORMATION */}
            <div
              className="text-white text-center text-xs mt-6 px-11 hp375:px-[50px] md:w-[55%] md:px-0 md:mt-0 md:text-left 
            lg:text-[14px] lg:px-4 lg:pt-6 lg:pe-9 lg:leading-6 xl:text-[16px] xl:px-16 xl:leading-7 xl:pe-20 "
            >
              <p>
                Buket Byatiq berdedikasi untuk menciptakan buket yang tidak
                hanya indah tapi juga memiliki makna dan nilai sentimental yang
                tinggi.
              </p>
            </div>
          </div>

          {/* CONTACT */}
          <div className="flex flex-col items-center mt-4 md:w-[35%] md:mt-0 md:items-start xl:w-[30%]">
            <div className="text-white flex gap-2 mt-2 xl:mt-4">
              <img src="svg/footer-telephone.svg" alt="" />
              <p className="text-[12px] lg:text-[14px] xl:text-[16px] ">
                082124726241
              </p>
            </div>
            <div className="text-white flex gap-2 mt-2">
              <img src="svg/footer-email.svg" alt="" />
              <p className="text-[12px] lg:text-[14px] xl:text-[16px] ">
                username@email.com
              </p>
            </div>
            <div className="text-white flex gap-3 w-[215px] mt-2 lg:w-[280px]">
              <img src="svg/footer-location.svg" alt="" />
              <p className="text-[12px] lg:text-[14px] xl:text-[16px] ">
                desa cipakat, kec.Singaparna, kab.Tasikmalaya, Tasikmalaya 45465
              </p>
            </div>
          </div>
        </section>
        <div className="hidden md:block w-full mt-3 lg:mt-6 border border-white/20"></div>
      </div>
    </footer>
  );
};

export default Footer;
