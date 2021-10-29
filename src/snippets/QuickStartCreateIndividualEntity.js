import React from 'react';
import TabbedCodeBlock from '../components/TabbedCodeBlock';

const curl = `
curl https://dev.methodfi.com/entities \\
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
    "address": {
      "line1": "3300 N Interstate 35",
      "line2": null,
      "city": "Austin",
      "state": "TX",
      "zip": "78705"
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
  address: {
    line1: '3300 N Interstate 35',
    line2: null,
    city: 'Austin',
    state: 'TX',
    zip: '78705',
  },
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
    'dob': '1997-03-18',
  },
  'address': {
    'line1': '3300 N Interstate 35',
    'line2': None,
    'city': 'Austin',
    'state': 'TX',
    'zip': '78705'
  }
})
`.trim();

export default function () {
  return (
    <TabbedCodeBlock
      groupId="all"
      name="quick-start-create-individual"
      items={[
        { title: 'cURL', language: 'shell', content: curl },
        { title: 'Node.js', language: 'javascript', content: nodejs },
        { title: 'Python', language: 'python', content: python },
      ]} />
  );
}
