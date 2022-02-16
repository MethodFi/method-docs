import React from 'react';
import TabbedCodeBlock from '../components/TabbedCodeBlock';

const curl = `
curl https://production.methodfi.com/connections/cxn_8MDWz73sdNbjD/public_account_tokens \\
  -H "Authorization: Bearer sk_WyZEWVfTcH7GqmPzUPk65Vjc"
`.trim();

const nodejs = `
const public_account_tokens = await method.connections('cxn_8MDWz73sdNbjD').public_account_tokens.list();
`.trim();

const python = `
public_account_tokens = method.connections('cxn_8MDWz73sdNbjD').public_account_tokens.list()
`.trim();

export default function () {
  return (
    <TabbedCodeBlock
      groupId="all"
      name="connections-retrieve-public-account-tokens"
      items={[
        { title: 'cURL', language: 'shell', content: curl },
        { title: 'Node.js', language: 'javascript', content: nodejs },
        { title: 'Python', language: 'python', content: python },
      ]} />
  );
}
