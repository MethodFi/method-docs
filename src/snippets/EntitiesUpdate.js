import React from 'react';
import TabbedCodeBlock from '../components/TabbedCodeBlock';

const curl = `
curl https://production.methodfi.com/entities/ent_au22b1fbFJbp8 \\
  -X PUT \\
  -H "Authorization: Bearer sk_WyZEWVfTcH7GqmPzUPk65Vjc" \\
  -H "Content-Type: application/json" \\
  -d '{
    "individual": {
      "first_name": "Kevin",
      "last_name": "Doyle",
      "email": "kevin.doyle@gmail.com",
      "dob": "1997-03-18"
    }
  }'
`.trim();

const nodejs = `
const entity = await method.entities.update('ent_au22b1fbFJbp8', {
  individual: {
    first_name: 'Kevin',
    last_name: 'Doyle',
    email: 'kevin.doyle@gmail.com',
    dob: '1997-03-18',
  },
});
`.trim();

const python = `
entity = method.entities.update('ent_au22b1fbFJbp8', {
  'individual': {
    'first_name': 'Kevin',
    'last_name': 'Doyle',
    'email': 'kevin.doyle@gmail.com',
    'dob': '1997-03-18',
  }
})
`.trim();

export default function () {
  return (
    <TabbedCodeBlock
      groupId="all"
      name="entities-update"
      items={[
        { title: 'cURL', language: 'shell', content: curl },
        { title: 'Node.js', language: 'javascript', content: nodejs },
        { title: 'Python', language: 'python', content: python },
      ]} />
  );
}
