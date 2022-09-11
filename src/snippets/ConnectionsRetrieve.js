import React from 'react';
import TabbedCodeBlock from '../components/TabbedCodeBlock';

const curl = `
curl https://production.methodfi.com/connections/cxn_iENwAPKnNqA5j \\
  -H "Authorization: Bearer sk_WyZEWVfTcH7GqmPzUPk65Vjc"
`.trim();

const nodejs = `
const connection = await method.connections.get('cxn_iENwAPKnNqA5j');
`.trim();

const python = `
connection = method.connections.get('cxn_iENwAPKnNqA5j')
`.trim();

const response = {};

export default function () {
  return (
    <TabbedCodeBlock
      groupId="all"
      name="connections-retrieve"
      title="GET /connections/:connectionId"
      response={response}
      items={[
        { title: 'cURL', language: 'shell', content: curl },
        { title: 'Node.js', language: 'javascript', content: nodejs },
        { title: 'Python', language: 'python', content: python },
      ]} />
  );
}
