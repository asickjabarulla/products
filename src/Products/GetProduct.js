import axios from "axios";
import React from "react";
import ProductList from "../components/Products/ProductList";

export default function Product() {
  const [products, setProducts] = React.useState(null);

  React.useEffect(() => {
    axios.get("./data-json/db.json").then((response) => {
      setProducts(response.data.products);
    });
  }, []);
  if (!products) return null;
  return (
    <div>
      <ProductList products={products} />
    </div>
  );
}
