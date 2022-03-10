import { Route } from "react-router-dom";
import MainHeader from "./Components/MainHeader";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";
import Welcome from "./pages/Welcom";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/product-details/:productId">
          <ProductDetail />
        </Route>
      </main>
    </div>
  );
}

export default App;
