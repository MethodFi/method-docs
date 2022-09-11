import React from 'react';
import TabbedCodeBlock from '../components/TabbedCodeBlock';

const curl = `
curl https://production.methodfi.com/elements/accounts/exchange \\
  -X POST \\
  -H "Authorization: Bearer sk_WyZEWVfTcH7GqmPzUPk65Vjc" \\
  -H "Content-Type: application/json" \\
  -d '{
    "public_account_token": "pk_acc_iZKeBTmnmw3aSGePcfdweUEJTBXwsfR4"
  }'
`.trim();

const nodejs = `
const account = await method
  .elements
  .exchangePublicAccountToken('pk_acc_iZKeBTmnmw3aSGePcfdweUEJTBXwsfR4');
`.trim();

const python = `
account = method
  .elements
  .exchange_public_account_token('pk_acc_iZKeBTmnmw3aSGePcfdweUEJTBXwsfR4')
`.trim();

const response = {};

export default function () {
  return (
    <TabbedCodeBlock
      groupId="all"
      name="elements-exchange-public-account-token"
      title="POST /elements/accounts/exchange"
      response={response}
      items={[
        { title: 'cURL', language: 'shell', content: curl },
        { title: 'Node.js', language: 'javascript', content: nodejs },
        { title: 'Python', language: 'python', content: python },
      ]} />
  );
}
