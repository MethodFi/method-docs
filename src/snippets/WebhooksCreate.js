import React from 'react';
import TabbedCodeBlock from '../components/TabbedCodeBlock';

const curl = `
curl https://production.methodfi.com/webhooks \\
  -X POST \\
  -H "Authorization: Bearer sk_WyZEWVfTcH7GqmPzUPk65Vjc" \\
  -H "Content-Type: application/json" \\
  -d '{
    "type": "payment.update",
    "url": "https://api.example.app/webhook",
    "auth_token": "md7UqcTSmvXCBzPORDwOkE"
  }'
`.trim();

const nodejs = `
const webhook = await method.webhooks.create({
  type: 'payment.update',
  url: 'https://api.example.app/webhook',
  auth_token: 'md7UqcTSmvXCBzPORDwOkE',
});
`.trim();

const python = `
webhook = method.webhooks.create({
  'type': 'payment.update',
  'url': 'https://api.example.app/webhook',
  'auth_token': 'md7UqcTSmvXCBzPORDwOkE'
})
`.trim();

const response = {
  "id": "whk_cSGjA6d9N8y8R",
  "type": "payment.update",
  "url": "https://api.example.app/webhook",
  "auth_token": "md7UqcTSmvXCBzPORDwOkE",
  "metadata": null,
  "created_at": "2020-12-09T00:41:05.647Z",
  "updated_at": "2020-12-09T00:41:05.647Z"
};

export default function () {
  return (
    <TabbedCodeBlock
      groupId="all"
      name="webhooks-create"
      title="POST /webhooks"
      response={response}
      items={[
        { title: 'cURL', language: 'shell', content: curl },
        { title: 'Node.js', language: 'javascript', content: nodejs },
        { title: 'Python', language: 'python', content: python },
      ]} />
  );
}
