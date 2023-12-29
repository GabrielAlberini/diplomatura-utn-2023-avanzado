import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { ProductCard } from "./components/ProductCard/ProductCard";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchingData = async () => {
      try {
        const response = await axios.get("http://localhost:3005/api/product");
        setProducts(response.data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchingData();
  }, []);

  return (
    <main className="app">
      <h1>Test</h1>
      <div className="product-list">
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </main>
  );
}

export { App };
