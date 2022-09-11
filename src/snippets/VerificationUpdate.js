import React from 'react';
import TabbedCodeBlock from '../components/TabbedCodeBlock';

const curl = `
curl https://production.methodfi.com/accounts/acc_b9q2XVAnNFbp3/verification \\
  -X PUT \\
  -H "Authorization: Bearer sk_WyZEWVfTcH7GqmPzUPk65Vjc" \\
  -H "Content-Type: application/json" \\
  -d '{
    "micro_deposits": {
      "amounts": [10, 4]
    }
  }'
`.trim();

const nodejs = `
const verification = await method
  .accounts('acc_b9q2XVAnNFbp3')
  .verification
  .update({
    micro_deposits: {
      amounts: [10, 4],
    },
  });
`.trim();

const python = `
verification = method
  .accounts('acc_b9q2XVAnNFbp3')
  .verification
  .update({
    'micro_deposits': {
      'amounts': [10, 4]
    }
  })
`.trim();

export default function () {
  return (
    <TabbedCodeBlock
      groupId="all"
      name="verification-update"
      title="PUT /accounts/:account_id/verification"
      response={{}}
      items={[
        { title: 'cURL', language: 'shell', content: curl },
        { title: 'Node.js', language: 'javascript', content: nodejs },
        { title: 'Python', language: 'python', content: python },
      ]} />
  );
}
