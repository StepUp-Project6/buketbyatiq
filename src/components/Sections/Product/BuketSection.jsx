import { useState, useEffect } from "react";
import SectionLayout from "../../Layouts/SectionLayout";
import SectionTitle from "../../Elements/SectionTitle";
import { products } from "../../../utils/products"; // Menghapus import products2 yang tidak diperlukan
import CardProduct from "../../Fragments/CardProduct";
import Pagination from "../../Fragments/Pagination";
import ProductLayout from "../../Layouts/ProductLayout";

const BuketSection = () => {
  const [productCount, setProductCount] = useState(6);

  useEffect(() => {
    const updateProductCount = () => {
      if (window.innerWidth >= 768) {
        setProductCount(8);
      } else {
        setProductCount(6);
      }
    };
    updateProductCount();

    window.addEventListener("resize", updateProductCount);
    return () => window.removeEventListener("resize", updateProductCount);
  }, []);

  return (
    <SectionLayout classname={`flex flex-col justify-center gap-8 lg:gap-16 xl:gap-20`}>
      <SectionTitle title={"Produk Buket Byatiq"} />
       <div className="flex flex-col gap-10 md:gap-16 xl:gap-20">
        <ProductLayout products={products.slice(0, productCount)} />
      </div>
      <div className="border border-black w-full">
        <Pagination data={products} CardComponent={CardProduct} />
      </div>
    </SectionLayout>
  );
};

export default BuketSection;
