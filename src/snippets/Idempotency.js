import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import TabbedCodeBlock from '../components/TabbedCodeBlock';

const curl = `
curl https://production.methodfi.com/payments \\
  -X POST \\
  -H "Authorization: Bearer sk_WyZEWVfTcH7GqmPzUPk65Vjc" \\
  -H "Idempotency-Key: 24c47283-0cc8-43a0-8b4a-ce16d002de97" \\
  -H "Content-Type: application/json" \\
  -d '{
    "amount": 5000,
    "source": "acc_JMJZT6r7iHi8e",
    "destination": "acc_AXthnzpBnxxWP",
    "description": "Loan Pmt"
  }'
`.trim();

const nodejs = `
const payment = await method.payments.create({
  amount: 5000,
  source: 'acc_JMJZT6r7iHi8e',
  destination: 'acc_AXthnzpBnxxWP',
  description: 'Loan Pmt',
}, {
  idempotency_key: '24c47283-0cc8-43a0-8b4a-ce16d002de97',
});
`.trim();

const python = `
payment = method.payments.create({
  'amount': 5000,
  'source': 'acc_JMJZT6r7iHi8e',
  'destination': 'acc_AXthnzpBnxxWP',
  'description': 'Loan Pmt',
}, {
  'idempotency_key': '24c47283-0cc8-43a0-8b4a-ce16d002de97'
})
`.trim();

export default function () {
  return (
    <TabbedCodeBlock
      groupId="all"
      name="idempotency"
      title="POST /payments"
      response={{}}
      items={[
        { title: 'cURL', language: 'shell', content: curl },
        { title: 'Node.js', language: 'javascript', content: nodejs },
        { title: 'Python', language: 'python', content: python },
      ]} />
  );
}
