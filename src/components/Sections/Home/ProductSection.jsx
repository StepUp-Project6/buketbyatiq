import SectionLayout from "../../Layouts/SectionLayout";
import SectionTitle from "../../Elements/SectionTitle";
import ProductLayout from "../../Layouts/ProductLayout";
import { products } from "../../../utils/products";
import RedirectButton from "../../Elements/RedirectButton";

const ProductSection = () => {
  return (
    <SectionLayout classname={`flex flex-col justify-center gap-8 lg:gap-16 xl:gap-20`} id="product">
      <SectionTitle title={"Produk Buket Byatiq"} />
      <div className="flex flex-col gap-10 md:gap-16 xl:gap-20">
        <ProductLayout products={products.slice(0, 4)} />
        <RedirectButton
          name={"Lihat Selengkapnya"}
          to={"/produk"}
          classname={`font-timesNewRoman font-bold text-xs md:text-base lg:text-xl bg-white border-2 border-primary rounded-[10px] md:rounded-[12px] lg:rounded-[15px] py-2.5 px-6 md:py-3 lg:px-11`}
        />
      </div>
    </SectionLayout>
  );
};

export default ProductSection;
