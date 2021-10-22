import React from 'react';
import TabbedCodeBlock from '../components/TabbedCodeBlock';

const curl = `
curl https://production.methodfi.com/webhooks/whk_cSGjA6d9N8y8R \\
  -H "Authorization: Bearer sk_WyZEWVfTcH7GqmPzUPk65Vjc"
`.trim();

const nodejs = `
const webhook = await method.webhooks.get('whk_cSGjA6d9N8y8R');
`.trim();

const python = `
webhook = method.webhooks.get('whk_cSGjA6d9N8y8R')
`.trim();

export default function () {
  return (
    <TabbedCodeBlock
      groupId="all"
      name="webhooks-retrieve"
      items={[
        { title: 'cURL', language: 'shell', content: curl },
        { title: 'Node.js', language: 'javascript', content: nodejs },
        { title: 'Python', language: 'python', content: python },
      ]} />
  );
}
