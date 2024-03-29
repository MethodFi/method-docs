import React from 'react';
import TabbedCodeBlock from '../components/TabbedCodeBlock';

const curl = `
curl https://production.methodfi.com/entities \\
  -X POST \\
  -H "Authorization: Bearer sk_WyZEWVfTcH7GqmPzUPk65Vjc" \\
  -H "Content-Type: application/json" \\
  -d '{
    "type": "individual",
    "individual": {}
  }'
`.trim();

const nodejs = `
const entity = await method.entities.create({
  type: 'individual',
  individual: {},
});
`.trim();

const python = `
entity = method.entities.create({
  'type': 'individual',
  'individual': {}
})
`.trim();

const response = {};

export default function () {
  return (
    <TabbedCodeBlock
      groupId="all"
      name="create-method-data-individual-empty"
      title="POST /entities"
      response={response}
      items={[
        { title: 'cURL', language: 'shell', content: curl },
        { title: 'Node.js', language: 'javascript', content: nodejs },
        { title: 'Python', language: 'python', content: python },
      ]} />
  );
}
