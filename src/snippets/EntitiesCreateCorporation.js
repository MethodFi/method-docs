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

const python = `
entity = method.entities.create({
  'type': 'c_corporation',
  'corporation': {
    'name': 'Alphabet Inc.',
    'dba': 'Google',
    'ein': '641234567',
    'owners': [
      {
        'first_name': 'Sergey',
        'last_name': 'Brin',
        'phone': '+16505555555',
        'email': 'sergey@google.com',
        'dob': '1973-08-21',
        'address': {
          'line1': '600 Amphitheatre Parkway',
          'line2': None,
          'city': 'Mountain View',
          'state': 'CA',
          'zip': '94043'
        }
      }
    ]
  },
  'address': {
    'line1': '1600 Amphitheatre Parkway',
    'line2': None,
    'city': 'Mountain View',
    'state': 'CA',
    'zip': '94043'
  }
})
`.trim();

const response = {
  "id": "ent_y1a9e1fbnJ1f3",
  "type": "c_corporation",
  "individual": null,
  "receive_only": null,
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
  },
  "capabilities": [
    "payments:send",
    "payments:receive"
  ],
  "available_capabilities": [],
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
      title="POST /entities"
      groupId="all"
      name="create-corporation"
      response={response}
      items={[
        { title: 'cURL', language: 'shell', content: curl },
        { title: 'Node.js', language: 'javascript', content: nodejs },
        { title: 'Python', language: 'python', content: python },
      ]} />
  );
}
