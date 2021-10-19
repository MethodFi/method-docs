import React from 'react';
import TabbedCodeBlock from '../components/TabbedCodeBlock';

const curl = `
curl https://production.methodfi.com/accounts/acc_Zc4F2aTLt8CBt \\
  -H "Authorization: Bearer sk_WyZEWVfTcH7GqmPzUPk65Vjc"
`.trim();

const nodejs = `
const account = await method.accounts.get('acc_Zc4F2aTLt8CBt');
`.trim();

export default function () {
  return (
    <TabbedCodeBlock
      groupId="all"
      name="accounts-retrieve"
      items={[
        { title: 'cURL', language: 'shell', content: curl },
        { title: 'Node.js', language: 'javascript', content: nodejs },
      ]} />
  );
}
