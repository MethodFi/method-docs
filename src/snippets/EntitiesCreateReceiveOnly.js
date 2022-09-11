import React from 'react';
import TabbedCodeBlock from '../components/TabbedCodeBlock';

const curl = `
curl https://production.methodfi.com/entities \\
  -X POST \\
  -H "Authorization: Bearer sk_WyZEWVfTcH7GqmPzUPk65Vjc" \\
  -H "Content-Type: application/json" \\
  -d '{
    "type": "receive_only",
    "receive_only": {
      "name": "Kevin Doyle",
      "phone": "+16505555555",
      "email": "kevin.doyle@gmail.com"
    }
  }'
`.trim();

const nodejs = `
const entity = await method.entities.create({
  type: 'receive_only',
  receive_only: {
    name: 'Kevin Doyle',
    phone: '+16505555555',
    email: 'kevin.doyle@gmail.com',
  },
});
`.trim();

const python = `
entity = method.entities.create({
  'type': 'receive_only',
  'receive_only': {
    'name': 'Kevin Doyle',
    'phone': '+16505555555',
    'email': 'kevin.doyle@gmail.com',
  }
})
`.trim();

const response = {
  "id": "ent_ixcRfFb7qQe46",
  "type": "receive_only",
  "individual": null,
  "corporation": null,
  "receive_only": {
    "name": "Kevin Doyle",
    "phone": "+16505555555",
    "email": "kevin.doyle@gmail.com"
  },
  "address": {},
  "capabilities": [
    "payments:receive"
  ],
  "available_capabilities": [],
  "pending_capabilities": [],
  "error": null,
  "status": "active",
  "metadata": null,
  "created_at": "2020-12-09T00:40:51.107Z",
  "updated_at": "2020-12-09T00:40:51.107Z"
};

export default function () {
  return (
    <TabbedCodeBlock
      groupId="all"
      name="create-receive-only"
      title="POST /entities"
      response={response}
      items={[
        { title: 'cURL', language: 'shell', content: curl },
        { title: 'Node.js', language: 'javascript', content: nodejs },
        { title: 'Python', language: 'python', content: python },
      ]} />
  );
}
