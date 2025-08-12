import { BrowserRouter, Routes, Route } from "react-router";
import { Cart } from "./components/pages/cart/cart";
import { ItemListContainer } from "./components/pages/ItemListContainer/ItemListContainer";
import { Navbar } from "./components/layout/navbar/Navbar";
import ItemDetailContainer from "./components/pages/itemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
        <Routes>
          {/*empiezo a crear mis rutas*/}
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/category/:name" element={<ItemListContainer/>} />
          <Route path="/detalle/:id" element={<ItemDetailContainer/>} />
          <Route path="/carrito" element={<Cart />} />
          <Route path="/auth/login" element={<h1>Inicia sesion</h1>} />
          <Route path="/auth/register" element={<h1>Restritate</h1>} />
          <Route path="/*/" element={<h1>404 not found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;