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

export default function () {
  return (
    <TabbedCodeBlock
      groupId="all"
      name="create-individual-auth-session"
      items={[
        { title: 'cURL', language: 'shell', content: curl },
        { title: 'Node.js', language: 'javascript', content: nodejs },
        { title: 'Python', language: 'python', content: python },
      ]} />
  );
}
