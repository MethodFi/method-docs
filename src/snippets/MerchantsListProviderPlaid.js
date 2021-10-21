import React from 'react';
import TabbedCodeBlock from '../components/TabbedCodeBlock';

const curl = `
curl "https://production.methodfi.com/merchants?provider_id.plaid={ins_id}" \\
  -H "Authorization: Bearer {API_KEY}"
`.trim();

const nodejs = `
const merchants = await method.merchants.list({ 'provider_id.plaid': '{ins_id}' });
`.trim();

export default function () {
  return (
    <TabbedCodeBlock
      groupId="all"
      name="merchants-list-provider-plaid"
      items={[
        { title: 'cURL', language: 'shell', content: curl },
        { title: 'Node.js', language: 'javascript', content: nodejs },
      ]} />
  );
}
