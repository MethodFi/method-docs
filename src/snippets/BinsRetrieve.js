import React from 'react';
import TabbedCodeBlock from '../components/TabbedCodeBlock';

const curl = `
curl https://production.methodfi.com/bins?bin=414720 \\
  -H "Authorization: Bearer sk_WyZEWVfTcH7GqmPzUPk65Vjc"
`.trim();

const nodejs = `
const bin = await method.bins.get('414720');
`.trim();

const python = `
bin = method.bins.get('414720')
`.trim();

const response = {
  "id": "bin_fWXVJF8HWYSdQ",
  "bin": "414720",
  "brand": "visa",
  "issuer": "CHASE BANK USA, N.A.",
  "type": "credit",
  "category": "SIGNATURE",
  "bank_url": "www.chase.com",
  "sample_pan": "4147206867378753"
};

export default function () {
  return (
    <TabbedCodeBlock
      groupId="all"
      name="bins-retrieve"
      title="GET /bins?bin={bin}"
      response={response}
      items={[
        { title: 'cURL', language: 'shell', content: curl },
        { title: 'Node.js', language: 'javascript', content: nodejs },
        { title: 'Python', language: 'python', content: python },
      ]} />
  );
}
