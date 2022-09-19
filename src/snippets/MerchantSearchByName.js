import React from 'react';
import TabbedCodeBlock from '../components/TabbedCodeBlock';

const curl = `
curl "https://production.methodfi.com/merchants?name=fedloan" \\
  -H "Authorization: Bearer sk_WyZEWVfTcH7GqmPzUPk65Vjc"
`.trim();

const nodejs = `
const merchants = await method.merchants.list({ name: 'fedloan' });
`.trim();

const python = `
merchants = method.merchants.list({'name': 'fedloan'})
`.trim();

const response = `[
  {
    "mch_id": "mch_2",
    "parent_name": "FedLoan",
    "name": "FedLoan Servicing - Student Loans",
    "logo": "https://static.methodfi.com/mch-logos/1616215578688-fedloan.png",
    ...
  }
]`;

export default function () {
  return (
    <TabbedCodeBlock
      groupId="all"
      name="merchants-list-by-name"
      title="GET /merchants?name={name}"
      response={response}
      items={[
        { title: 'cURL', language: 'shell', content: curl },
        { title: 'Node.js', language: 'javascript', content: nodejs },
        { title: 'Python', language: 'python', content: python },
      ]} />
  );
}
