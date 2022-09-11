import React from 'react';
import TabbedCodeBlock from '../components/TabbedCodeBlock';

const curl = `
curl https://production.methodfi.com/payments/pmt_rPrDPEwyCVUcm/reversals \\
  -H "Authorization: Bearer sk_WyZEWVfTcH7GqmPzUPk65Vjc"
`.trim();

const nodejs = `
const reversals = await method.payments('pmt_rPrDPEwyCVUcm').reversals.list();
`.trim();

const python = `
reversals = method.payments('pmt_rPrDPEwyCVUcm').reversals.list()
`.trim();

export default function () {
  return (
    <TabbedCodeBlock
      groupId="all"
      name="reversals-list"
      title="GET /reports"
      response={{}}
      items={[
        { title: 'cURL', language: 'shell', content: curl },
        { title: 'Node.js', language: 'javascript', content: nodejs },
        { title: 'Python', language: 'python', content: python },
      ]} />
  );
}
