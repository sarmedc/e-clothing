import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HPC3JHDaX1odUuIkJDXRn892BMk0v1OLf0frqhBjOEsiS8yuKwSvamN747qsbrGkK5X4jk9I3VXuXQo66fqXb5c00OglXL1ec";

  const onToken = (token) => {
    console.log(token);
    alert("Paymen Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="E Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
