import React from 'react';
import TabbedCodeBlock from '../components/TabbedCodeBlock';

const curl = `
curl https://production.methodfi.com/payments \\
  -X POST \\
  -H "Authorization: Bearer sk_WyZEWVfTcH7GqmPzUPk65Vjc" \\
  -H "Content-Type: application/json" \\
  -d '{
    "amount": 5000,
    "source": "acc_JMJZT6r7iHi8e",
    "destination": "acc_AXthnzpBnxxWP",
    "description": "Loan Pmt",
    "fee": {
      "type": "markup",
      "amount": 200
    }
  }'
`.trim();

const nodejs = `
const payment = await method.payments.create({
  amount: 5000,
  source: 'acc_JMJZT6r7iHi8e',
  destination: 'acc_AXthnzpBnxxWP',
  description: 'Loan Pmt',
  fee: {
    type: 'markup',
    amount: 200,
  }
});
`.trim();

const python = `
payment = method.payments.create({
  'amount': 5000,
  'source': 'acc_JMJZT6r7iHi8e',
  'destination': 'acc_AXthnzpBnxxWP',
  'description': 'Loan Pmt',
  'fee': {
    'type': 'markup',
    'amount': 200
  }
})
`.trim();

export default function () {
  return (
    <TabbedCodeBlock
      groupId="all"
      name="payments-create-with-markup-fee"
      title="POST /payments"
      response={{}}
      items={[
        { title: 'cURL', language: 'shell', content: curl },
        { title: 'Node.js', language: 'javascript', content: nodejs },
        { title: 'Python', language: 'python', content: python },
      ]} />
  );
}
