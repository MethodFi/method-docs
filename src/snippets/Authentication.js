import React from 'react';
import TabbedCodeBlock from '../components/TabbedCodeBlock';

const curl = `
curl https://production.methodfi.com/accounts \\
  -H "Authorization: Bearer sk_WyZEWVfTcH7GqmPzUPk65Vjc"
`.trim();

const nodejs = `
const { Method, Environments } = require('method-node');

const method = new Method({
  apiKey: 'sk_WyZEWVfTcH7GqmPzUPk65Vjc',
  env: Environments.production,
});

const accounts = await method.accounts.list();
`.trim();

const python = `
from method import Method

method = Method(env='production', api_key='sk_WyZEWVfTcH7GqmPzUPk65Vjc')

accounts = method.accounts.list()
`.trim();

export default function () {
  return (
    <TabbedCodeBlock
      groupId="all"
      name="authentication"
      items={[
        { title: 'cURL', language: 'shell', content: curl },
        { title: 'Node.js', language: 'javascript', content: nodejs },
        { title: 'Python', language: 'python', content: python },
      ]} />
  );
}
