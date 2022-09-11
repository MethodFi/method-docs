import React from 'react';
import TabbedCodeBlock from '../components/TabbedCodeBlock';

const curl = `
curl https://production.methodfi.com/payments/pmt_rPrDPEwyCVUcm/reversals/rvs_eaBAUJtetgMdR \\
  -H "Authorization: Bearer sk_WyZEWVfTcH7GqmPzUPk65Vjc"
`.trim();

const nodejs = `
const reversal = await method.payments('pmt_rPrDPEwyCVUcm').reversals.get('rvs_eaBAUJtetgMdR');
`.trim();

const python = `
reversal = method.payments('pmt_rPrDPEwyCVUcm').reversals.get('rvs_eaBAUJtetgMdR')
`.trim();

export default function () {
  return (
    <TabbedCodeBlock
      groupId="all"
      name="reversals-retrieve"
      title="GET /payments/:payment_id/reversals/:reversal_id"
      response={{}}
      items={[
        { title: 'cURL', language: 'shell', content: curl },
        { title: 'Node.js', language: 'javascript', content: nodejs },
        { title: 'Python', language: 'python', content: python },
      ]} />
  );
}
