import React from 'react';
import TabbedCodeBlock from '../components/TabbedCodeBlock';

const curl = `
curl https://production.methodfi.com/entities \\
  -X POST \\
  -H "Authorization: Bearer sk_WyZEWVfTcH7GqmPzUPk65Vjc" \\
  -H "Content-Type: application/json" \\
  -d '{
    "type": "individual",
    "individual": {
      "first_name": "Kevin",
      "last_name": "Doyle",
      "phone": "+15121231111",
    }
  }'
`.trim();

const nodejs = `
const entity = await method.entities.create({
  type: 'individual',
  individual: {
    first_name: 'Kevin',
    last_name: 'Doyle',
    phone: '+15121231111',
  },
});
`.trim();

const python = `
entity = method.entities.create({
  'type': 'individual',
  'individual': {
    'first_name': 'Kevin',
    'last_name': 'Doyle',
    'phone': '+15121231111'
  }
})
`.trim();

const response = `{
  "id": "ent_au22b1fbFJbp8",
  "type": "individual",
  "individual": {
    "first_name": "Kevin",
    "last_name": "Doyle",
    "phone": "+15121231111",
    "dob": null,
    "email": null
  },
  "capabilities": [
    "payments:receive",
    "payments:send"
  ],
  "available_capabilities": [
    "data:retrieve"
  ],
  "pending_capabilities": [],
  ...
}`;

export default function () {
  return (
    <TabbedCodeBlock
      groupId="all"
      name="create-method-data-individual"
      title="POST /entities"
      response={response}
      items={[
        { title: 'cURL', language: 'shell', content: curl },
        { title: 'Node.js', language: 'javascript', content: nodejs },
        { title: 'Python', language: 'python', content: python },
      ]} />
  );
}
