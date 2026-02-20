import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import DefaultLayout from "./layouts/DefaultLayout";
import ProductPage from "./pages/ProductPage";
import ProductDetailPage from "./pages/ProductDetailPage";

import "./assets/products.css";
import { BudgetProvider } from "./Context/BudgetContext";

export default function App() {
  return (
    <BudgetProvider>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route index Component={HomePage} />
            <Route path="/about-us" Component={AboutPage} />
            <Route path="/product" Component={ProductPage} />
            <Route path="/product/:id" Component={ProductDetailPage} />
          </Route>
        </Routes>
      </BrowserRouter>
    </BudgetProvider>
  );
}
