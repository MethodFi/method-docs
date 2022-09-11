import React from 'react';
import TabbedCodeBlock from '../components/TabbedCodeBlock';

const curl = `
curl https://production.methodfi.com/entities/ent_au22b1fbFJbp8 \\
  -H "Authorization: Bearer sk_WyZEWVfTcH7GqmPzUPk65Vjc"
`.trim();

const nodejs = `
const entity = await method.entities.get('ent_au22b1fbFJbp8');
`.trim();

const python = `
entity = method.entities.get('ent_au22b1fbFJbp8')
`.trim();

const response = {
  "id": "ent_au22b1fbFJbp8",
  "type": "individual",
  "individual": {
    "first_name": "Kevin",
    "last_name": "Doyle",
    "phone": "+16505555555",
    "email": "kevin.doyle@gmail.com",
    "dob": "1997-03-18"
  },
  "corporation": null,
  "receive_only": null,
  "address": {
    "line1": "3300 N Interstate 35",
    "line2": null,
    "city": "Austin",
    "state": "TX",
    "zip": "78705"
  },
  "capabilities": [
    "payments:send",
    "payments:receive",
    "data:sync"
  ],
  "available_capabilities": [
    "data:retrieve"
  ],
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
      name="entities-retrieve"
      title="GET /entities/:entity_id"
      response={response}
      items={[
        { title: 'cURL', language: 'shell', content: curl },
        { title: 'Node.js', language: 'javascript', content: nodejs },
        { title: 'Python', language: 'python', content: python },
      ]} />
  );
}
