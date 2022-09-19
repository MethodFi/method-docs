import React from 'react';
import TabbedCodeBlock from '../components/TabbedCodeBlock';

const curl = `
curl https://production.methodfi.com/elements/token \\
  -X POST \\
  -H "Authorization: Bearer sk_WyZEWVfTcH7GqmPzUPk65Vjc" \\
  -H "Content-Type: application/json" \\
  -d '{
    "entity_id": "ent_au22b1fbFJbp8",
    "team_name": "Demo Auth App",
    "type": "auth",
    "auth": {}
  }'
`.trim();

const nodejs = `
const token = await method.elements.createToken({
  entity_id: 'ent_au22b1fbFJbp8',
  team_name: 'Demo Auth App',
  type: 'auth',
  auth: {},
});
`.trim();

const python = `
token = method.elements.create_token({
  'entity_id': 'ent_au22b1fbFJbp8',
  'team_name': 'Demo Auth App',
  'type': 'auth',
  'auth': {}
})
`.trim();

const response = {
  "element_token": "pk_elem_f3TZsKnmP7Q69bX65hRHngBEb8mT8gbG"
};

export default function () {
  return (
    <TabbedCodeBlock
      groupId="all"
      name="elements-create-auth-token"
      title="POST /elements/token"
      response={response}
      items={[
        { title: 'cURL', language: 'shell', content: curl },
        { title: 'Node.js', language: 'javascript', content: nodejs },
        { title: 'Python', language: 'python', content: python },
      ]} />
  );
}
