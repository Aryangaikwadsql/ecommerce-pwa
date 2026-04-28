import React from "react";
import "./App.css";

import headphones from "./images/headphones.jpg";
import watch from "./images/watch.jpg";
import mouse from "./images/mouse.jpg";

function App() {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: "₹1999",
      image: headphones
    },
    {
      id: 2,
      name: "Smart Watch",
      price: "₹2999",
      image: watch
    },
    {
      id: 3,
      name: "Gaming Mouse",
      price: "₹1499",
      image: mouse
    }
  ];

  return (
    <div className="container">
      <h1>E-Commerce PWA Store</h1>
      <p>Premium Product Listing Page</p>

      <div className="product-grid">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.image} alt={product.name} className="product-image" />
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