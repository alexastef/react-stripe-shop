import React, { useState, useEffect } from "react";
// import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const stripe = require('stripe')(process.env.STRIPE_SECRET_TEST);
// const products = await stripe.products.list();

// console.log(products);

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    const allProducts = await stripe.products.list();

    setProducts(allProducts);    
  }

  console.log(products);

  return (
    <div className="products">
        <div className="product" id={products.id}>
          <h1>{products.name}</h1>
          <h4>{products.description}</h4>
        </div>
    </div>
  )
}

export default ProductList;
