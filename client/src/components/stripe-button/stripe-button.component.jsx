import React from "react";
import axios from 'axios'
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_UkVPdVW0qywV7QpRul6SXtT2008Rfp2TxS";

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    }).then(response => {
      alert('Payment successfull')
    }).catch(error => {
      console.log('Payment error ', JSON.parse(error));
      alert('There was issue with your payment. Please sure you use provided credit card');
    });

  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="eDesign eShop"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is ${price}€`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
