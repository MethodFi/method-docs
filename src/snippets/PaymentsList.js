import React from 'react';
import TabbedCodeBlock from '../components/TabbedCodeBlock';

const curl = `
curl https://production.methodfi.com/payments \\
  -H "Authorization: Bearer sk_WyZEWVfTcH7GqmPzUPk65Vjc"
`.trim();

const nodejs = `
const payments = await method.payments.list();
`.trim();

const python = `
payments = method.payments.list()
`.trim();

const response = {
  "data": [
    {
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
    }
  ]
};

export default function () {
  return (
    <TabbedCodeBlock
      groupId="all"
      name="payments-list"
      title="GET /payments"
      response={response}
      items={[
        { title: 'cURL', language: 'shell', content: curl },
        { title: 'Node.js', language: 'javascript', content: nodejs },
        { title: 'Python', language: 'python', content: python },
      ]} />
  );
}
