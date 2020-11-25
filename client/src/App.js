import React, {useState} from "react";
// import StripeContainer from "./Components/StripeContainer";
import { Elements, StripeProvider } from 'react-stripe-elements';
import items from "./API/api";
import Product from "./Components/Product";
import Cart from "./Components/Cart";
// import Checkout from "./Components/Checkout/index";
import StripeContainer from "./Components/StripeContainer/StripeContainer.js";
import "./App.css";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = id => {
    setCartItems(cartItems => {
      const itemInCart = cartItems.find(item => item.id === id);

      if (itemInCart) {
        return cartItems.map(item => {
          if (item.id !== id) return item;
          return {...itemInCart, quantity: item.quantity + 1};
        });
      }

      const item = items.find(item => item.id === id);
      return [...cartItems, {...item, quantity: 1}];
    });
  };

  const totalCost = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity, 0
  );

  return (
    <div className="App">

      <div className="products">
        {items.map(item => (
          <Product 
            key={item.id} 
            title={item.title} 
            price={item.price}
            onAddToCartClick={() => handleAddToCart(item.id)} />
        ))}
      </div>
      {/* <StripeContainer /> */}
      <Cart cartItems={cartItems} totalCost={totalCost} />
      {cartItems.length > 0 && (
        <StripeProvider apiKey="pk_test_51Hqno3CUbxqSHspvtJFJ7XYSpm1CfaCU5sjo24bJCeKZ1uWNOXQlzaEfrMGiHGdBAPzf4J5KuRrfdMTwektSgy15009hCPZZGq">
          {/* <Elements>
            <Checkout totalCost={totalCost} />
          </Elements> */}
          <StripeContainer totalCost={totalCost} />
        </StripeProvider>
      )}
    </div>
  );
}

export default App;
