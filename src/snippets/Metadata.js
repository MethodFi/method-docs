import React from 'react';
import CodeBlock from '@theme/CodeBlock';
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
      "phone": "+16505555555",
      "email": "kevin.doyle@gmail.com",
      "dob": "1997-03-18"
    },
    "metadata": {
      "user_id": "usr_jVFNtdlhDQnd92",
      "username": "kdoyle",
    }
  }'
`.trim();

const nodejs = `
const entity = await method.entities.create({
  type: 'individual',
  individual: {
    first_name: 'Kevin',
    last_name: 'Doyle',
    phone: '+16505555555',
    email: 'kevin.doyle@gmail.com',
    dob: '1997-03-18',
  },
  metadata: {
    user_id: 'usr_jVFNtdlhDQnd92',
    username: 'kdoyle',
  }
});
`.trim();

const python = `
entity = method.entities.create({
  'type': 'individual',
  'individual': {
    'first_name': 'Kevin',
    'last_name': 'Doyle',
    'phone': '+16505555555',
    'email': 'kevin.doyle@gmail.com',
    'dob': '1997-03-18'
  },
  'metadata': {
    'user_id': 'usr_jVFNtdlhDQnd92',
    'username': 'kdoyle'
  }
})
`.trim();

export default function () {
  return (
    <TabbedCodeBlock
      groupId="all"
      name="metadata"
      items={[
        { title: 'cURL', language: 'shell', content: curl },
        { title: 'Node.js', language: 'javascript', content: nodejs },
        { title: 'Python', language: 'python', content: python },
      ]} />
  );
}
