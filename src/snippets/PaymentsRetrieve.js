import React from 'react';
import TabbedCodeBlock from '../components/TabbedCodeBlock';

const curl = `
curl https://production.methodfi.com/payments/pmt_rPrDPEwyCVUcm \\
  -H "Authorization: Bearer sk_WyZEWVfTcH7GqmPzUPk65Vjc"
`.trim();

const nodejs = `
const payment = await method.payments.get('pmt_rPrDPEwyCVUcm');
`.trim();

const python = `
payment = method.payments.get('pmt_rPrDPEwyCVUcm')
`.trim();

export default function () {
  return (
    <TabbedCodeBlock
      groupId="all"
      name="payments-retrieve"
      items={[
        { title: 'cURL', language: 'shell', content: curl },
        { title: 'Node.js', language: 'javascript', content: nodejs },
        { title: 'Python', language: 'python', content: python },
      ]} />
  );
}
