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

export default function () {
  return (
    <TabbedCodeBlock
      groupId="all"
      name="merchants-list-by-name"
      items={[
        { title: 'cURL', language: 'shell', content: curl },
        { title: 'Node.js', language: 'javascript', content: nodejs },
        { title: 'Python', language: 'python', content: python },
      ]} />
  );
}
