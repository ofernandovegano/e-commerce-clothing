import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51IpzzNHEwy8vxeDnVzlzB8n9sCPPVKXoIQoN4fidPvYTu3C3WIL1Vx57p2MZdoBvLNAuJhcbQx4m2noaQPaJwjWh00UDt0Yrut';
  const onToken = token => {
    console.log(token);
    alert('Payment Succesfull');
  }
  return (
    <StripeCheckout 
      label='Pay Now'
      name='e-commerce Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amout ={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
};

export default StripeCheckoutButton;