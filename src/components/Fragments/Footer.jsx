import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative w-full font-timesNewRoman">
      <img
        src="/images/footer/footer-background-mobile.png"
        alt="footer bg"
        className="absolute w-full -z-50 md:hidden"
      />
      <img
        src="/images/footer/footer-background-dekstop.png"
        alt="footer bg"
        className="hidden absolute w-full -z-50 md:block"
      />
      <div className="w-full p-[30px] md:bg-gray-900/15">
        <section className="flex flex-col items-center gap-2 w-full text-white">
          <Link to="/">
            <p className="text-xs tracking-[4px]">BERANDA</p>
          </Link>
          <div className="w-2 h-2 bg-[#DBD1BC] rounded-full"></div>
          <Link to="/produk">
            <p className="text-xs tracking-[4px]">PRODUK</p>
          </Link>
          <div className="w-2 h-2 bg-[#DBD1BC] rounded-full"></div>
          <Link to="/tentang-kami">
            <p className="text-xs tracking-[4px]">TENTANG KAMI</p>
          </Link>
        </section>
        <section className="w-full mt-6">
          <div className="flex flex-col items-center">
            {/* SOSMED */}
            <div>
              <h1 className="text-[24px] font-extrabold text-[#DBD1BC] ">
                Buket Byatiq
              </h1>
              <div className="flex gap-4 justify-center mt-2">
                <a
                  href="https://www.instagram.com/buket_byatiq"
                  target="_blank"
                >
                  <img
                    src="svg/footer-instagram.svg"
                    alt="icon ig"
                    className="w-[25px]"
                  />
                </a>
                <a
                  href="https://www.facebook.com/titik.thututthayanxthidia?locale=id_ID"
                  target="_blank"
                >
                  <img
                    src="svg/footer-facebook.svg"
                    alt="icon fb"
                    className="w-[25px]"
                  />
                </a>
                <a
                  href="https://shopee.co.id/atik1933?entryPoint=ShopBySearch&searchKeyword=buket_byatiq"
                  target="_blank"
                >
                  <img
                    src="svg/footer-shoppe.svg"
                    alt="icon sp"
                    className="w-[25px]"
                  />
                </a>
              </div>
            </div>
            {/* TEKS INFORMATION */}
            <div className="text-white text-center text-xs mt-6 px-11 hp375:px-[50px]">
              <p>
                Buket Byatiq berdedikasi untuk menciptakan buket yang tidak
                hanya indah tapi juga memiliki makna dan nilai sentimental yang
                tinggi.
              </p>
            </div>
          </div>

          {/* CONTACT */}
          <div className="flex flex-col items-center mt-4">
            <div className="text-white flex gap-2 mt-2">
              <img src="svg/footer-telephone.svg" alt="" />
              <p className="text-[12px]">082124726241</p>
            </div>
            <div className="text-white flex gap-2 mt-2">
              <img src="svg/footer-email.svg" alt="" />
              <p className="text-[12px]">username@email.com</p>
            </div>
            <div className="text-white flex gap-3 w-[215px] mt-2">
              <img src="svg/footer-location.svg" alt="" />
              <p className="text-[12px]">
                desa cipakat, kec.Singaparna, kab.Tasikmalaya, Tasikmalaya 45465
              </p>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
