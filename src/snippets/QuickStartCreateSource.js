import React from 'react';
import TabbedCodeBlock from '../components/TabbedCodeBlock';

const curl = `
curl https://dev.methodfi.com/accounts \\
  -X POST \\
  -H "Authorization: Bearer sk_WyZEWVfTcH7GqmPzUPk65Vjc" \\
  -H "Content-Type: application/json" \\
  -d '{
    "holder_id": "ent_au22b1fbFJbp8",
    "ach": {
      "routing": "367537407",
      "number": "57838927",
      "type": "checking"
    }
  }'
`.trim();

const nodejs = `
const account = await method.accounts.create({
  holder_id: 'ent_au22b1fbFJbp8',
  ach: {
    routing: '367537407',
    number: '57838927',
    type: 'checking',
  },
});
`.trim();

const python = `
account = method.accounts.create({
  'holder_id': 'ent_au22b1fbFJbp8',
  'ach': {
    'routing': '367537407',
    'number': '57838927',
    'type': 'checking'
  }
})
`.trim();

const response = {
  "id": "acc_b9q2XVAnNFbp3",
  "holder_id": "ent_au22b1fbFJbp8",
  "type": "ach",
  "ach": {
    "routing": "367537407",
    "number": "57838927",
    "type": "checking"
  },
  "liability": null,
  "clearing": null,
  "metadata": null,
  "status": "active",
  "capabilities": [
    "payments:receive",
    "payments:send"
  ],
  "error": null,
  "created_at": "2020-12-09T00:40:51.107Z",
  "updated_at": "2020-12-09T00:40:51.107Z"
};

export default function () {
  return (
    <TabbedCodeBlock
      groupId="all"
      name="quick-start-accounts-create-ach"
      title="POST /accounts"
      response={response}
      items={[
        { title: 'cURL', language: 'shell', content: curl },
        { title: 'Node.js', language: 'javascript', content: nodejs },
        { title: 'Python', language: 'python', content: python },
      ]} />
  );
}
