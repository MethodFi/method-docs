import React from 'react';
import TabbedCodeBlock from '../components/TabbedCodeBlock';

const curl = `
curl https://production.methodfi.com/connections/cxn_FhjM8hchRGGwU \\
  -X PUT \\
  -H "Authorization: Bearer sk_WyZEWVfTcH7GqmPzUPk65Vjc" \\
  -H "Content-Type: application/json" \\
  -d '{
    "status": "syncing"
  }'
`.trim();

const nodejs = `
const connection = await method.connections.update('cxn_8MDWz73sdNbjD', { status: 'syncing' });
`.trim();

const python = `
connection = method.connections.update('cxn_8MDWz73sdNbjD', { status: 'syncing' })
`.trim();

export default function () {
  return (
    <TabbedCodeBlock
      groupId="all"
      name="connections-update"
      items={[
        { title: 'cURL', language: 'shell', content: curl },
        { title: 'Node.js', language: 'javascript', content: nodejs },
        { title: 'Python', language: 'python', content: python },
      ]} />
  );
}
