import React from "react";
import "./App.css";

function App() {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: "₹1999"
    },
    {
      id: 2,
      name: "Smart Watch",
      price: "₹2999"
    },
    {
      id: 3,
      name: "Gaming Mouse",
      price: "₹1499"
    }
  ];

  return (
    <div className="container">
      <h1>E-Commerce PWA Store</h1>
      <p>Simple Product Listing Page</p>

      <div className="product-grid">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;