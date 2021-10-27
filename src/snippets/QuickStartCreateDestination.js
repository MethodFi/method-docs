import React from 'react';
import TabbedCodeBlock from '../components/TabbedCodeBlock';

const curl = `
curl https://dev.methodfi.com/accounts \\
  -X POST \\
  -H "Authorization: Bearer sk_WyZEWVfTcH7GqmPzUPk65Vjc" \\
  -H "Content-Type: application/json" \\
  -d '{
    "holder_id": "ent_au22b1fbFJbp8",
    "liability": {
      "mch_id": "mch_2",
      "account_number": "1122334455"
    }
  }'
`.trim();

const nodejs = `
const account = await method.accounts.create({
  holder_id: 'ent_au22b1fbFJbp8',
  liability: {
    mch_id: 'mch_2',
    account_number: '1122334455',
  }
});
`.trim();

const python = `
account = method.accounts.create({
  'holder_id': 'ent_au22b1fbFJbp8',
  'liability': {
    'mch_id': 'mch_2',
    'account_number': '1122334455'
  }
})
`.trim();

export default function () {
  return (
    <TabbedCodeBlock
      groupId="all"
      name="quick-start-accounts-create-liability"
      items={[
        { title: 'cURL', language: 'shell', content: curl },
        { title: 'Node.js', language: 'javascript', content: nodejs },
        { title: 'Python', language: 'python', content: python },
      ]} />
  );
}
