const stripe = require('stripe')(
  'sk_test_51NGyhLJZiOz1mmzV0H0wofCjjGEQKSnUk2m7y6iH9OafZoPfkqQIM6ix6s5ZN8CGY6kX6cmbq1qeMj4GIeYkOJXu006jz0tItT',
);
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.get('/', (req, res) => {
  res.send('Hello World Ashar Here');
});

app.post('/payment-sheet', async (req, res) => {
  // Use an existing Customer ID if this is a returning customer.

  const {amount, currency} = req.body;

  const customer = await stripe.customers.create();
  const ephemeralKey = await stripe.ephemeralKeys.create(
    {customer: customer.id},
    {apiVersion: '2022-11-15'},
  );
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount,
    currency: currency,
    customer: customer.id,
    payment_method_types: ['card'],
  });

  res.json({
    paymentIntent: paymentIntent.client_secret,
    ephemeralKey: ephemeralKey.secret,
    customer: customer.id,
  });
});

app.listen(4002, () =>
  console.log('Server Successfully Started on http://localhost:4002'),
);
