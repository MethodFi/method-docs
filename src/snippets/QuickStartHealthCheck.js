import React from 'react';
import TabbedCodeBlock from '../components/TabbedCodeBlock';

const curl = `
curl https://dev.methodfi.com/ping \\
  -H "Authorization: Bearer sk_WyZEWVfTcH7GqmPzUPk65Vjc"
`.trim();

const nodejs = `
const { Method, Environments } = require('method-node');

const method = new Method({
  apiKey: 'sk_WyZEWVfTcH7GqmPzUPk65Vjc',
  env: Environments.dev,
});

await method.ping();
`.trim();

const python = `
from method import Method

method = Method(env='dev', api_key='sk_WyZEWVfTcH7GqmPzUPk65Vjc')

method.ping()
`.trim();

export default function () {
  return (
    <TabbedCodeBlock
      groupId="all"
      name="quick-start-healthcheck"
      title="GET /ping"
      response={{}}
      items={[
        { title: 'cURL', language: 'shell', content: curl },
        { title: 'Node.js', language: 'javascript', content: nodejs },
        { title: 'Python', language: 'python', content: python },
      ]} />
  );
}
