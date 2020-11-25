import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import Checkout from "../Checkout/";
// import ProductList from "../ProductList";

const PUBLIC_KEY = "pk_test_51Hqno3CUbxqSHspvtJFJ7XYSpm1CfaCU5sjo24bJCeKZ1uWNOXQlzaEfrMGiHGdBAPzf4J5KuRrfdMTwektSgy15009hCPZZGq";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const StripeContainer = ({ totalCost }) => {
  return (
    <Elements stripe={stripeTestPromise}>
      <Checkout totalCost={totalCost} />
    </Elements>
  );
};

export default StripeContainer;