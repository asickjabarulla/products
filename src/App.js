import Header from "./components/Header/Header";
import GetProducts from "./Products/GetProducts";
import GetProduct from "./Products/GetProduct";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GetProducts />}>
            <Route path=":productId" element={<GetProduct />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
