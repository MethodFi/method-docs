import React from 'react';
import TabbedCodeBlock from '../components/TabbedCodeBlock';

const curl = `
curl https://production.methodfi.com/accounts/acc_Zc4F2aTLt8CBt/syncs \\
  -X POST \\
  -H "Authorization: Bearer sk_WyZEWVfTcH7GqmPzUPk65Vjc"
`.trim();

const nodejs = `
const account = await method.accounts.sync('acc_Zc4F2aTLt8CBt');
`.trim();

const python = `
account = method.accounts.sync('acc_Zc4F2aTLt8CBt')
`.trim();

export default function () {
  return (
    <TabbedCodeBlock
      groupId="all"
      name="accounts-list"
      items={[
        { title: 'cURL', language: 'shell', content: curl },
        { title: 'Node.js', language: 'javascript', content: nodejs },
        { title: 'Python', language: 'python', content: python },
      ]} />
  );
}
