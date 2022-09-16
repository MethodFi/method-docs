import React from 'react';
import TabbedCodeBlock from '../components/TabbedCodeBlock';

const curl = `
curl https://production.methodfi.com/ping \\
  -H "Authorization: Bearer sk_WyZEWVfTcH7GqmPzUPk65Vjc"
`.trim();

const nodejs = `
await method.ping();
`.trim();

const python = `
method.ping()
`.trim();

const response = {
  "success": true,
  "data": null,
  "message": "pong"
};

export default function () {
  return (
    <TabbedCodeBlock
      groupId="all"
      name="healthcheck"
      title="GET /ping"
      response={response}
      items={[
        { title: 'cURL', language: 'shell', content: curl },
        { title: 'Node.js', language: 'javascript', content: nodejs },
        { title: 'Python', language: 'python', content: python },
      ]} />
  );
}
