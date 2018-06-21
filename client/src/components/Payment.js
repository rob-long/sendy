import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";

class Payment extends Component {
  render() {
    return (
      <StripeCheckout
        name="Sendy"
        description="5 credits"
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
        amount={500}
        token={token => console.log(token)}
      >
        <a className="btn">Add Credits</a>
      </StripeCheckout>
    );
  }
}

export default Payment;
