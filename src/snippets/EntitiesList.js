import React from 'react';
import TabbedCodeBlock from '../components/TabbedCodeBlock';

const curl = `
curl https://production.methodfi.com/entities \\
  -H "Authorization: Bearer sk_WyZEWVfTcH7GqmPzUPk65Vjc"
`.trim();

const nodejs = `
const entities = await method.entities.list();
`.trim();

const python = `
entities = method.entities.list()
`.trim();

const response = {
  "data": [
    {
      "id": "ent_au22b1fbFJbp8",
      "type": "individual",
      "individual": {
        "first_name": "Kevin",
        "last_name": "Doyle",
        "phone": "+16505555555",
        "email": "kevin.doyle@gmail.com",
        "dob": "1997-03-18"
      },
      "corporation": null,
      "receive_only": null,
      "capabilities": [
        "payments:send",
        "payments:receive"
      ],
      "available_capabilities": [],
      "pending_capabilities": [],
      "error": null,
      "address": {
        "line1": "3300 N Interstate 35",
        "line2": null,
        "city": "Austin",
        "state": "TX",
        "zip": "78705"
      },
      "status": "active",
      "metadata": null,
      "created_at": "2020-12-09T00:40:51.107Z",
      "updated_at": "2020-12-09T00:40:51.107Z"
    },
    {
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
      "capabilities": [
        "payments:send",
        "payments:receive"
      ],
      "available_capabilities": [],
      "pending_capabilities": [],
      "error": null,
      "address": {
        "line1": "1600 Amphitheatre Parkway",
        "line2": null,
        "city": "Mountain View",
        "state": "CA",
        "zip": "94043"
      },
      "status": "active",
      "metadata": null,
      "created_at": "2020-12-09T00:40:51.107Z",
      "updated_at": "2020-12-09T00:40:51.107Z"
    },
    {
      "id": "ent_mxp3B3yyKLHTH",
      "type": "individual",
      "individual": {
        "first_name": "Alex",
        "last_name": "Kennedy",
        "phone": "+19565555555",
        "email": "alex.kennedy@hey.com",
        "dob": "1985-04-23"
      },
      "corporation": null,
      "receive_only": null,
      "capabilities": [
        "payments:send",
        "payments:receive"
      ],
      "available_capabilities": [],
      "pending_capabilities": [],
      "error": null,
      "address": {
        "line1": "1 Hacker Way",
        "line2": null,
        "city": "Menlo Park",
        "state": "CA",
        "zip": "94025"
      },
      "status": "active",
      "metadata": null,
      "created_at": "2020-12-09T00:40:51.107Z",
      "updated_at": "2020-12-09T00:40:51.107Z"
    }
  ]
};

export default function () {
  return (
    <TabbedCodeBlock
      groupId="all"
      name="entities-list"
      title="GET /entities"
      response={response}
      items={[
        { title: 'cURL', language: 'shell', content: curl },
        { title: 'Node.js', language: 'javascript', content: nodejs },
        { title: 'Python', language: 'python', content: python },
      ]} />
  );
}
