import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import TabbedCodeBlock from '../components/TabbedCodeBlock';

const curl = `
curl "https://production.methodfi.com/merchants?provider_id.plaid={ins_id}" \\
  -H "Authorization: Bearer {API_KEY}"
`.trim();

const nodejs = `
const merchants = await method.merchants.list({ 'provider_id.plaid': '{ins_id}' });
`.trim();

const python = `
merchants = method.merchants.list({ 'provider_id.plaid': '{ins_id}' })
`.trim();

const response = {};

export default function () {
  return (
    <TabbedCodeBlock
      groupId="all"
      name="merchants-list-provider-plaid"
      title="GET /merchants?provider_id.plaid={ins_id}"
      response={response}
      items={[
        { title: 'cURL', language: 'shell', content: curl },
        { title: 'Node.js', language: 'javascript', content: nodejs },
        { title: 'Python', language: 'python', content: python },
      ]} />
  );
}
