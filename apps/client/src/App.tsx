import { BrowserRouter, Route, Routes } from "react-router";
import { ListProducts } from "./pages/list-products";
import { HomePage } from "./pages/home";
import SignIn from "./pages/auth/sign-in";
import Layout from "./components/layout";


const App = () => {
  return (
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/products" element={<ListProducts />} /> 
          <Route path="/auth/signin" element={<SignIn />} />  
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App