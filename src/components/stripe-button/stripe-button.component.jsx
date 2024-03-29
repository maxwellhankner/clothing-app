import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_fqxBnwFmFfJm5oFDmaAdAfUW0072hOgkcB';

    const onToken = token => {
        console.log(token);
        alert('Payment Sucessful')
    }

    return(
        <StripeCheckout
            label='Pay Now'
            name='Product App'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;