import PropTypes from "prop-types"
import CardProduct from "../Fragments/CardProduct"
const ProductLayout = ( { products }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-x-3 lg:gap-x-7 gap-y-7 justify-items-center lg:justify-between w-full">
      {products.map((product) => (
        <CardProduct
          key={product.id}
          product={product}
        />
      ))
      }
    </div>
  )
}

ProductLayout.propTypes = {
  products: PropTypes.array
}

export default ProductLayout