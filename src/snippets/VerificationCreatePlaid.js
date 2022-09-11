import React from 'react';
import TabbedCodeBlock from '../components/TabbedCodeBlock';

const curl = `
curl https://production.methodfi.com/accounts/acc_b9q2XVAnNFbp3/verification \\
  -X POST \\
  -H "Authorization: Bearer sk_WyZEWVfTcH7GqmPzUPk65Vjc" \\
  -H "Content-Type: application/json" \\
  -d '{
    "type": "plaid",
    "plaid": {
      "balances" : {
        "available" : 100,
        "current" : 110,
        "iso_currency_code" : "USD",
        "limit" : null,
        "unofficial_currency_code" : null
      },
      "transactions": [
        {
            "account_id" : "NEramQK7DjHx863vG8xPuEqE9ojkN4HWkNbQe",
            "account_owner" : null,
            "amount" : 5.4,
            "authorized_date" : null,
            "category" : [...],
            "category_id" : "22016000",
            "date" : "2021-10-07",
            "iso_currency_code" : "USD",
            "location" : {...},
            "merchant_name" : "Uber",
            "name" : "Uber 063015 SF**POOL**",
            "payment_channel" : "in store",
            "payment_meta" : {...},
            "pending" : false,
            ...
        },
        ...
      ]
    }
  }'
`.trim();

const nodejs = `
const verification = await method
  .accounts('acc_b9q2XVAnNFbp3')
  .verification
  .create({
    type: 'plaid',
    plaid: {
      balances: {
        available : 100,
        current : 110,
        iso_currency_code : 'USD',
        limit : null,
        unofficial_currency_code : null,
      },
      transactions: [
        ...
      ],
    },
  });
`.trim();

const python = `
verification = method
  .accounts('acc_b9q2XVAnNFbp3')
  .verification
  .create({
    'type': 'plaid',
    'plaid': {
      'balances': {
        'available': 100,
        'current': 110,
        'iso_currency_code': 'USD',
        'limit': None,
        'unofficial_currency_code': None
      },
      'transactions': [
        ...
      ]
    }
  })
`.trim();

export default function () {
  return (
    <TabbedCodeBlock
      groupId="all"
      name="verification-create-plaid"
      title="POST /accounts/:account_id/verification"
      response={{}}
      items={[
        { title: 'cURL', language: 'shell', content: curl },
        { title: 'Node.js', language: 'javascript', content: nodejs },
        { title: 'Python', language: 'python', content: python },
      ]} />
  );
}
