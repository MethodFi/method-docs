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
  .reversals('rvs_eaBAUJtetgMdR')
  .update({ status: 'pending' });
`.trim();

const python = `
reversal = method
  .payments('pmt_rPrDPEwyCVUcm')
  .reversals('rvs_eaBAUJtetgMdR')
  .update({ 'status': 'pending' })
`.trim();

export default function () {
  return (
    <TabbedCodeBlock
      groupId="all"
      name="reversals-update"
      items={[
        { title: 'cURL', language: 'shell', content: curl },
        { title: 'Node.js', language: 'javascript', content: nodejs },
        { title: 'Python', language: 'python', content: python },
      ]} />
  );
}
