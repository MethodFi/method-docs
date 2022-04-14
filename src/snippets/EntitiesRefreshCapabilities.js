import React from 'react';
import TabbedCodeBlock from '../components/TabbedCodeBlock';

const curl = `
curl https://production.methodfi.com/entities/ent_au22b1fbFJbp8/refresh_capabilities \\
  -X POST \\
  -H "Authorization: Bearer sk_WyZEWVfTcH7GqmPzUPk65Vjc" \\
  -H "Content-Type: application/json" \\
  -d '{}'
`.trim();

const nodejs = `
const entity = await method.entities('ent_au22b1fbFJbp8').refresh_capabilities();
`.trim();

const python = `
entity = method.entities('ent_au22b1fbFJbp8').refresh_capabilities()
`.trim();

export default function () {
  return (
    <TabbedCodeBlock
      groupId="all"
      name="entities-refresh-capabilities"
      items={[
        { title: 'cURL', language: 'shell', content: curl },
        { title: 'Node.js', language: 'javascript', content: nodejs },
        { title: 'Python', language: 'python', content: python },
      ]} />
  );
}
