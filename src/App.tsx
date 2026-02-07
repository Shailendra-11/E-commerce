import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./page/Home";
import About from "./page/About";
import Contact from "./page/Contact";
import Product from "./page/Product";
import ProductDetails from "./page/ProductDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default App;
