import { Link } from "react-router";
import "./productCard.css";
const ProductCard = ({product}) => {
  const{title , description , price} = product;
    return (
      <div style={{border:"1px solid pink"}} >
        <h2>{title}</h2>
        <h2>{price}</h2>
        <h2>{description}</h2>
        <Link to={`/detalle/${product.id}`}>ir al detalle</Link>
      </div>
  )
}

export default ProductCard