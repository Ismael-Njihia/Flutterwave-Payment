import React from 'react';
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';

export default function App() {
   const config = {
    public_key: 'FLWPUBK_TEST-f358d1bf7d80e396d97989845ce79a7b-X',
    tx_ref: Date.now(),
    amount: 1,
    currency: 'KES',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: 'ishmaelnjihia@gmail.com',
      phonenumber: '0741727406',
      name: 'Ismael Njihia',
    },
    customizations: {
      title: 'My store',
      description: 'Payment for items in cart',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

  const fwConfig = {
    ...config,
    text: 'Pay with Flutterwave!',
    callback: (response) => {
       console.log(response);
      closePaymentModal() // this will close the modal programmatically
    },
    onClose: () => {},
  };

  return (
    <div className="App">
     <h1>Hello Test user</h1>
      <FlutterWaveButton {...fwConfig} />
    </div>
  );
}