import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51IpzzNHEwy8vxeDnVzlzB8n9sCPPVKXoIQoN4fidPvYTu3C3WIL1Vx57p2MZdoBvLNAuJhcbQx4m2noaQPaJwjWh00UDt0Yrut';
  
  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    }).then(response => {
      alert('Payment successful')
    })
      .catch(error => {
      console.log('Payment error: ', JSON.parse(error));
      alert(
        'There was an issue with your payment. Please sure you use the provided credit card.'
      )
    })
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