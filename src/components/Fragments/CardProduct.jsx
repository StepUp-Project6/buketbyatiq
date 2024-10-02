import PropTypes from "prop-types";
const CardProduct = ({ product }) => {
  return (
    <div className="flex flex-col gap-2.5">
      <div className="w-[152px] h-[152px] md:w-[160px] md:h-[160px] lg:w-[200px] lg:h-[200px] xl:w-[263px] xl:h-[263px]">
        <img src={product.src} alt="" className="object-fill w-full h-full" />
      </div>
      <p className="text-xs md:text-sm lg:text-xl font-bold font-timesNewRoman">{product.name}</p>
    </div>
  );
};

CardProduct.propTypes = {
  product: PropTypes.array,
};

export default CardProduct;
