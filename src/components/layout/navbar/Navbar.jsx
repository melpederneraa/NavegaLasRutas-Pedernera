import { CartWidget } from "../../common/cartwidget/CartWidget";
import { CustomButton } from "../../common/customButton/CustomButton";
import{Link} from "react-router"
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div>
      <Link to = "/">
      <h2>Quinino</h2>
      </Link>
      <ul>
        <Link to ="/category/minuta">Minutas</Link>
        <Link to ="/category/pasta">Pastas</Link>
        <Link to ="/category/pizza">Pizzas</Link>
        <Link to ="/category/sanguche">Sanguches</Link>
        <Link to ="/category/empanada">Empanadas</Link>
        <Link to ="/category/postre">Postres</Link>
      </ul>
      <Link to="/carrito">
      Navegar al carrito
      </Link>
      <CartWidget />
    </div>
  );
};
