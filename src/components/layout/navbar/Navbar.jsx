import { CartWidget } from "../../common/cartwidget/CartWidget";
import { CustomButton } from "../../common/customButton/CustomButton";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div>
      <h2 className="logo">Quinino</h2>
      <ul>
        <li>Minutas</li>
        <li>Pastas</li>
        <li>Pizzas</li>
        <li>Sanguches</li>
        <li>Empanadas</li>
        <li>Postres</li>
      </ul>
      <CustomButton 
      texto = {"restar"}
      unaFuncion={()=> {
        console.log("Hola soy Pedro");
      }}
       />
      <CartWidget />
    </div>
  );
};
