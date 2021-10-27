import React from 'react';
import TabbedCodeBlock from '../components/TabbedCodeBlock';

const curl = `
curl https://dev.methodfi.com/payments \\
  -X POST \\
  -H "Authorization: Bearer sk_WyZEWVfTcH7GqmPzUPk65Vjc" \\
  -H "Content-Type: application/json" \\
  -d '{
    "amount": 5000,
    "source": "acc_b9q2XVAnNFbp3",
    "destination": "acc_Zc4F2aTLt8CBt",
    "description": "Loan Pmt"
  }'
`.trim();

const nodejs = `
const payment = await method.payments.create({
  amount: 5000,
  source: 'acc_b9q2XVAnNFbp3',
  destination: 'acc_Zc4F2aTLt8CBt',
  description: 'Loan Pmt',
});
`.trim();

const python = `
payment = method.payments.create({
  'amount': 5000,
  'source': 'acc_b9q2XVAnNFbp3',
  'destination': 'acc_Zc4F2aTLt8CBt',
  'description': 'Loan Pmt'
})
`.trim();

export default function () {
  return (
    <TabbedCodeBlock
      groupId="all"
      name="payments-create"
      items={[
        { title: 'cURL', language: 'shell', content: curl },
        { title: 'Node.js', language: 'javascript', content: nodejs },
        { title: 'Python', language: 'python', content: python },
      ]} />
  );
}
