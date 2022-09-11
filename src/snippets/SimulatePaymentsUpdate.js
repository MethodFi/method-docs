import React from 'react';
import TabbedCodeBlock from '../components/TabbedCodeBlock';

const curl = `
curl https://dev.methodfi.com/simulate/payments/pmt_rPrDPEwyCVUcm \\
  -X POST \\
  -H "Authorization: Bearer sk_WyZEWVfTcH7GqmPzUPk65Vjc" \\
  -H "Content-Type: application/json" \\
  -d '{
    "status": "processing"
  }'
`.trim();

const nodejs = `
const payment = await method.simulate.payments.update('pmt_rPrDPEwyCVUcm', { status: 'processing' });
`.trim();

const python = `
payment = method.simulate.payments.update('pmt_rPrDPEwyCVUcm', { 'status': 'processing' })
`.trim();

export default function () {
  return (
    <TabbedCodeBlock
      groupId="all"
      name="simulate-payments-update"
      title="POST /simulate/payments/:payment_id"
      response={{}}
      items={[
        { title: 'cURL', language: 'shell', content: curl },
        { title: 'Node.js', language: 'javascript', content: nodejs },
        { title: 'Python', language: 'python', content: python },
      ]} />
  );
}
