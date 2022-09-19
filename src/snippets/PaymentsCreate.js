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
    "description": "Loan Pmt"
  }'
`.trim();

const nodejs = `
const payment = await method.payments.create({
  amount: 5000,
  source: 'acc_JMJZT6r7iHi8e',
  destination: 'acc_AXthnzpBnxxWP',
  description: 'Loan Pmt',
});
`.trim();

const python = `
payment = method.payments.create({
  'amount': 5000,
  'source': 'acc_JMJZT6r7iHi8e',
  'destination': 'acc_AXthnzpBnxxWP',
  'description': 'Loan Pmt'
})
`.trim();

const response = {
  "id": "pmt_rPrDPEwyCVUcm",
  "reversal_id": null,
  "source_trace_id": null,
  "destination_trace_id": null,
  "source": "acc_JMJZT6r7iHi8e",
  "destination": "acc_AXthnzpBnxxWP",
  "amount": 5000,
  "description": "Loan Pmt",
  "status": "pending",
  "error": null,
  "metadata": null,
  "estimated_completion_date": "2020-12-11",
  "source_settlement_date": "2020-12-09",
  "destination_settlement_date": "2020-12-11",
  "fee": null,
  "created_at": "2020-12-09T00:42:31.209Z",
  "updated_at": "2020-12-09T00:43:30.996Z"
};

export default function () {
  return (
    <TabbedCodeBlock
      groupId="all"
      name="payments-create"
      title="POST /payments"
      response={response}
      items={[
        { title: 'cURL', language: 'shell', content: curl },
        { title: 'Node.js', language: 'javascript', content: nodejs },
        { title: 'Python', language: 'python', content: python },
      ]} />
  );
}
