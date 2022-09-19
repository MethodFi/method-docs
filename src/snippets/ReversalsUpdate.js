import React from 'react';
import TabbedCodeBlock from '../components/TabbedCodeBlock';

const curl = `
curl https://production.methodfi.com/payments/pmt_rPrDPEwyCVUcm/reversals/rvs_eaBAUJtetgMdR \\
  -X PUT \\
  -H "Authorization: Bearer sk_WyZEWVfTcH7GqmPzUPk65Vjc" \\
  -H "Content-Type: application/json" \\
  -d '{
    "status": "pending"
  }'
`.trim();

const nodejs = `
const reversal = await method
  .payments('pmt_rPrDPEwyCVUcm')
  .reversals
  .update('rvs_eaBAUJtetgMdR', { status: 'pending' });
`.trim();

const python = `
reversal = method
  .payments('pmt_rPrDPEwyCVUcm')
  .reversals
  .update('rvs_eaBAUJtetgMdR', { 'status': 'pending' })
`.trim();

const response = {
  "id": "rvs_eaBAUJtetgMdR",
  "pmt_id": "pmt_rPrDPEwyCVUcm",
  "target_account": "acc_JMJZT6r7iHi8e",
  "trace_id": null,
  "direction": "debit",
  "description": "PmtRvrsl",
  "amount": 5000,
  "status": "pending",
  "error": null,
  "created_at": "2020-12-09T00:42:31.209Z",
  "updated_at": "2020-12-09T00:43:30.996Z"
};

export default function () {
  return (
    <TabbedCodeBlock
      groupId="all"
      name="reversals-update"
      title="PUT /payments/:payment_id/reversals/:reversal_id"
      response={response}
      items={[
        { title: 'cURL', language: 'shell', content: curl },
        { title: 'Node.js', language: 'javascript', content: nodejs },
        { title: 'Python', language: 'python', content: python },
      ]} />
  );
}
