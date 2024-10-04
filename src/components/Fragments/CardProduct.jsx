import PropTypes from "prop-types";

const CardProduct = ({ product }) => {
  // Hanya render komponen jika product ada dan memiliki src serta name
  if (!product || !product.src || !product.name) {
    return null; // Tidak render apapun jika product tidak valid
  }

  return (
    <div className="flex flex-col gap-2.5">
      <div className="w-[152px] h-[152px] md:w-[160px] md:h-[160px] lg:w-[200px] lg:h-[200px] xl:w-[263px] xl:h-[263px]">
        <img 
          src={product.src} 
          alt={product.name} 
          className="object-fill w-full h-full" 
        />
      </div>
      <p className="text-xs md:text-sm lg:text-xl font-bold font-timesNewRoman">
        {product.name}
      </p>
    </div>
  );
};

CardProduct.propTypes = {
  product: PropTypes.shape({
    src: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired, // Memastikan product adalah objek dengan src dan name
};

export default CardProduct;
