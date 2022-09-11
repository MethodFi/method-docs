import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import TabbedCodeBlock from '../components/TabbedCodeBlock';

const curl = `
curl "https://production.methodfi.com/merchants?provider_id.plaid=ins_116527" \\
  -H "Authorization: Bearer sk_WyZEWVfTcH7GqmPzUPk65Vjc"
`.trim();

const nodejs = `
const merchants = await method.merchants.list({ 'provider_id.plaid': 'ins_116527' });
`.trim();

const python = `
merchants = method.merchants.list({'provider_id.plaid': 'ins_116527'})
`.trim();

export default function () {
  return (
    <TabbedCodeBlock
      groupId="all"
      name="merchants-list-by-plaid-id"
      items={[
        { title: 'cURL', language: 'shell', content: curl },
        { title: 'Node.js', language: 'javascript', content: nodejs },
        { title: 'Python', language: 'python', content: python },
      ]} />
  );
}
