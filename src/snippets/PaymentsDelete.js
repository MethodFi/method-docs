import React from 'react';
import TabbedCodeBlock from '../components/TabbedCodeBlock';

const curl = `
curl https://production.methodfi.com/payments/pmt_rPrDPEwyCVUcm \\
  -X DELETE \\
  -H "Authorization: Bearer sk_WyZEWVfTcH7GqmPzUPk65Vjc"
`.trim();

const nodejs = `
const payment = await method.payments.delete('pmt_rPrDPEwyCVUcm');
`.trim();

const python = `
payment = method.payments.delete('pmt_rPrDPEwyCVUcm')
`.trim();

export default function () {
  return (
    <TabbedCodeBlock
      groupId="all"
      name="payments-delete"
      items={[
        { title: 'cURL', language: 'shell', content: curl },
        { title: 'Node.js', language: 'javascript', content: nodejs },
        { title: 'Python', language: 'python', content: python },
      ]} />
  );
}
