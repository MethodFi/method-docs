import React from 'react';
import TabbedCodeBlock from '../components/TabbedCodeBlock';

const curl = `
curl https://production.methodfi.com/connections/cxn_8MDWz73sdNbjD/accounts \\
  -H "Authorization: Bearer sk_WyZEWVfTcH7GqmPzUPk65Vjc"
`.trim();

const nodejs = `
const accounts = await method.connections('cxn_8MDWz73sdNbjD').accounts.list();
`.trim();

const python = `
accounts = method.connections('cxn_8MDWz73sdNbjD').accounts.list()
`.trim();

export default function () {
  return (
    <TabbedCodeBlock
      groupId="all"
      name="connections-retrieve-accounts"
      items={[
        { title: 'cURL', language: 'shell', content: curl },
        { title: 'Node.js', language: 'javascript', content: nodejs },
        { title: 'Python', language: 'python', content: python },
      ]} />
  );
}
