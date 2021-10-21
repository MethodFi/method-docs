import React from 'react';
import TabbedCodeBlock from '../components/TabbedCodeBlock';

const curl = `
curl https://production.methodfi.com/entities \\
  -X POST \\
  -H "Authorization: Bearer sk_WyZEWVfTcH7GqmPzUPk65Vjc" \\
  -H "Content-Type: application/json" \\
  -d '{
    "type": "c_corporation",
    "corporation": {
      "name": "Alphabet Inc.",
      "dba": "Google",
      "ein": "641234567",
      "owners": [
        {
          "first_name": "Sergey",
          "last_name": "Brin",
          "phone": "+16505555555",
          "email": "sergey@google.com",
          "dob": "1973-08-21",
          "address": {
            "line1": "600 Amphitheatre Parkway",
            "line2": null,
            "city": "Mountain View",
            "state": "CA",
            "zip": "94043"
          }
        }
      ]
    },
    "address": {
      "line1": "1600 Amphitheatre Parkway",
      "line2": null,
      "city": "Mountain View",
      "state": "CA",
      "zip": "94043"
    }
  }'
`.trim();

const nodejs = `
const entity = await method.entities.create({
  type: 'c_corporation',
  corporation: {
    name: 'Alphabet Inc.',
    dba: 'Google',
    ein: '641234567',
    owners: [
      {
        first_name: 'Sergey',
        last_name: 'Brin',
        phone: '+16505555555',
        email: 'sergey@google.com',
        dob: '1973-08-21',
        address: {
          line1: '600 Amphitheatre Parkway',
          line2: null,
          city: 'Mountain View',
          state: 'CA',
          zip: '94043',
        },
      },
    ],
  },
  address: {
    line1: '1600 Amphitheatre Parkway',
    line2: null,
    city: 'Mountain View',
    state: 'CA',
    zip: '94043',
  },
});
`.trim();

export default function () {
  return (
    <TabbedCodeBlock
      groupId="all"
      name="create-corporation"
      items={[
        { title: 'cURL', language: 'shell', content: curl },
        { title: 'Node.js', language: 'javascript', content: nodejs },
      ]} />
  );
}
