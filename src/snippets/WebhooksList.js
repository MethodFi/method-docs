import React from 'react';
import TabbedCodeBlock from '../components/TabbedCodeBlock';

const curl = `
curl https://production.methodfi.com/webhooks \\
  -H "Authorization: Bearer sk_WyZEWVfTcH7GqmPzUPk65Vjc"
`.trim();

const nodejs = `
const webhooks = await method.webhooks.list();
`.trim();

const python = `
webhooks = method.webhooks.list()
`.trim();

export default function () {
  return (
    <TabbedCodeBlock
      groupId="all"
      name="webhooks-list"
      title="GET /webhooks"
      response={{}}
      items={[
        { title: 'cURL', language: 'shell', content: curl },
        { title: 'Node.js', language: 'javascript', content: nodejs },
        { title: 'Python', language: 'python', content: python },
      ]} />
  );
}
