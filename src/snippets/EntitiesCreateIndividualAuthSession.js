import React from 'react';
import TabbedCodeBlock from '../components/TabbedCodeBlock';

const curl = `
curl https://production.methodfi.com/entities/ent_au22b1fbFJbp8/auth_session \\
  -X POST \\
  -H "Authorization: Bearer sk_WyZEWVfTcH7GqmPzUPk65Vjc" \\
  -H "Content-Type: application/json" \\
  -d '{}'
`.trim();

const nodejs = `
const response = await method.entities.createAuthSession('ent_au22b1fbFJbp8');
`.trim();

const python = `
response = method.entities.create_auth_session('ent_au22b1fbFJbp8')
`.trim();

const response = {
  "questions": [
    {
      "id" : "qtn_ywWqCnXDGGmmg",
      "text" : "What is the monthly payment of your most recent auto loan or lease?",
      "answers" : [
        {
          "id" : "ans_qHLLEUBVpSpTK",
          "text" : "$601 - $700"
        },
        {
          "id" : "ans_b3xLiwTS8ygMy",
          "text" : "$701 - $800"
        },
        {
          "id" : "ans_Z5mMMLFy6waMK",
          "text" : "$801 - $900"
        },
        {
          "id" : "ans_BeSaN5Vj6tRjh",
          "text" : "$901 - $1000"
        },
        {
          "id" : "ans_74H68MJjqNhk8",
          "text" : "None of the Above"
        }
      ]
    },
  ],
};

export default function () {
  return (
    <TabbedCodeBlock
      groupId="all"
      name="create-individual-auth-session"
      title="POST /entities/:entity_id/auth_session"
      response={response}
      items={[
        { title: 'cURL', language: 'shell', content: curl },
        { title: 'Node.js', language: 'javascript', content: nodejs },
        { title: 'Python', language: 'python', content: python },
      ]} />
  );
}
