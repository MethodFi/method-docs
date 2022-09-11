import React from 'react';
import TabbedCodeBlock from '../components/TabbedCodeBlock';

const curl = `
curl https://production.methodfi.com/entities/ent_dSN2Lk3ifnWZA \\
  -X PUT \\
  -H "Authorization: Bearer sk_WyZEWVfTcH7GqmPzUPk65Vjc" \\
  -H "Content-Type: application/json" \\
  -d '{
    "individual": {
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
const entity = await method.entities.update('ent_dSN2Lk3ifnWZA', {
  individual: {
    dob: '1997-03-18'
  },
  address: {
    line1: '3300 N Interstate 35',
    line2: null,
    city: 'Austin',
    state: 'TX',
    zip: '78705'
  }
});
`.trim();

const python = `
entity = method.entities.update('ent_dSN2Lk3ifnWZA', {
  'individual': {
    'dob': '1997-03-18'
  },
  address: {
    'line1': '3300 N Interstate 35',
    'line2': None,
    'city': 'Austin',
    'state': 'TX',
    'zip': '78705'
  }
})
`.trim();

const response = {};

export default function () {
  return (
    <TabbedCodeBlock
      groupId="all"
      name="update-method-data-individual"
      title="PUT /entities/:entity_id"
      response={response}
      items={[
        { title: 'cURL', language: 'shell', content: curl },
        { title: 'Node.js', language: 'javascript', content: nodejs },
        { title: 'Python', language: 'python', content: python },
      ]} />
  );
}
