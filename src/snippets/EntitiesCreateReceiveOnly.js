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

export default function () {
  return (
    <TabbedCodeBlock
      groupId="all"
      name="create-receive-only"
      items={[
        { title: 'cURL', language: 'shell', content: curl },
        { title: 'Node.js', language: 'javascript', content: nodejs },
      ]} />
  );
}
