import React from 'react';
import TabbedCodeBlock from '../components/TabbedCodeBlock';

const curl = `
curl https://production.methodfi.com/entities/ent_au22b1fbFJbp8/auth_session \\
  -X PUT \\
  -H "Authorization: Bearer sk_WyZEWVfTcH7GqmPzUPk65Vjc" \\
  -H "Content-Type: application/json" \\
  -d '{
    "answers": [
      {
        "question_id": "qtn_ywWqCnXDGGmmg",
        "answer_id": "ans_74H68MJjqNhk8"
      },
      ...
    ]
  }'
`.trim();

const nodejs = `
const response = await method.entities.updateAuthSession('ent_au22b1fbFJbp8', {
  answers: [
    {
      "question_id": "qtn_ywWqCnXDGGmmg",
      "answer_id": "ans_74H68MJjqNhk8"
    },
    ...
  ]
});
`.trim();

const python = `
response = method.entities.update_auth_session('ent_au22b1fbFJbp8', {
  "answers": [
    {
      "question_id": "qtn_ywWqCnXDGGmmg",
      "answer_id": "ans_74H68MJjqNhk8"
    },
    ...
  ]
})
`.trim();

export default function () {
  return (
    <TabbedCodeBlock
      groupId="all"
      name="update-individual-auth-session"
      items={[
        { title: 'cURL', language: 'shell', content: curl },
        { title: 'Node.js', language: 'javascript', content: nodejs },
        { title: 'Python', language: 'python', content: python },
      ]} />
  );
}
