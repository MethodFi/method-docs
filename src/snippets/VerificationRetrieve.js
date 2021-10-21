import React from 'react';
import TabbedCodeBlock from '../components/TabbedCodeBlock';

const curl = `
curl https://production.methodfi.com/accounts/acc_b9q2XVAnNFbp3/verification \\
  -H "Authorization: Bearer sk_WyZEWVfTcH7GqmPzUPk65Vjc"
`.trim();

const nodejs = `
const verification = await method
  .accounts('acc_b9q2XVAnNFbp3')
  .verification
  .get();
`.trim();

export default function () {
  return (
    <TabbedCodeBlock
      groupId="all"
      name="verification-retrieve"
      items={[
        { title: 'cURL', language: 'shell', content: curl },
        { title: 'Node.js', language: 'javascript', content: nodejs },
      ]} />
  );
}
