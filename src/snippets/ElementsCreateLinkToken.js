import React from 'react';
import TabbedCodeBlock from '../components/TabbedCodeBlock';

const curl = `
curl https://production.methodfi.com/elements/token \\
  -X POST \\
  -H "Authorization: Bearer sk_WyZEWVfTcH7GqmPzUPk65Vjc" \\
  -H "Content-Type: application/json" \\
  -d '{
    "entity_id": "ent_au22b1fbFJbp8",
    "team_name": "Demo Payment App",
    "type": "link",
    "link": {
      "mask": "4127",
      "mch_id": "mch_3"
    }
  }'
`.trim();

const nodejs = `
const token = await method.elements.createToken({
  entity_id: 'ent_au22b1fbFJbp8',
  team_name: 'Demo Payment App',
  type: 'link',
  link: {
    mask: '4127',
    mch_id: 'mch_3',
  },
});
`.trim();

const python = `
token = method.elements.create_token({
  'entity_id': 'ent_au22b1fbFJbp8',
  'team_name': 'Demo Payment App',
  'type': 'link',
  'link': {
    'mask': '4127',
    'mch_id': 'mch_3'
  }
})
`.trim();

const response = {};

export default function () {
  return (
    <TabbedCodeBlock
      groupId="all"
      name="elements-create-link-token"
      title="POST /elements/token"
      response={response}
      items={[
        { title: 'cURL', language: 'shell', content: curl },
        { title: 'Node.js', language: 'javascript', content: nodejs },
        { title: 'Python', language: 'python', content: python },
      ]} />
  );
}
