import { BrowserRouter, Route, Routes } from "react-router";
import { ListProducts } from "./pages/list-products";
import { HomePage } from "./pages/home";


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ListProducts />} /> 
    </Routes>
    </BrowserRouter>
  )
}

export default App