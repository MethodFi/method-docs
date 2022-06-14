import React from 'react';
import TabbedCodeBlock from '../components/TabbedCodeBlock';

const curl = `
curl https://production.methodfi.com/webhooks \\
  -X POST \\
  -H "Authorization: Bearer sk_WyZEWVfTcH7GqmPzUPk65Vjc" \\
  -H "Content-Type: application/json" \\
  -d '{
    "type": "account.update",
    "url": "https://api.example.app/webhook",
    "auth_token": "md7UqcTSmvXCBzPORDwOkE"
  }'
`.trim();

const nodejs = `
const webhook = await method.webhooks.create({
  type: 'account.update',
  url: 'https://api.example.app/webhook',
  auth_token: 'md7UqcTSmvXCBzPORDwOkE',
});
`.trim();

const python = `
webhook = method.webhooks.create({
  'type': 'account.update',
  'url': 'https://api.example.app/webhook',
  'auth_token': 'md7UqcTSmvXCBzPORDwOkE'
})
`.trim();

export default function () {
  return (
    <TabbedCodeBlock
      groupId="all"
      name="webhooks-create"
      items={[
        { title: 'cURL', language: 'shell', content: curl },
        { title: 'Node.js', language: 'javascript', content: nodejs },
        { title: 'Python', language: 'python', content: python },
      ]} />
  );
}
