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

const response = {
  "id": "vrf_73TAQ8njUFsLJ",
  "status": "verified",
  "type": "plaid",
  "error": null,
  "initiated_at": "1970-01-01T00:00:00.000Z",
  "pending_at": "1970-01-01T00:00:00.000Z",
  "verified_at": "2021-10-12T21:23:48.447Z",
  "disabled_at": "1970-01-01T00:00:00.000Z",
  "created_at": "2021-10-12T21:23:48.449Z",
  "updated_at": "2021-10-12T21:23:48.449Z"
};

export default function () {
  return (
    <TabbedCodeBlock
      groupId="all"
      name="verification-create-plaid"
      title="POST /accounts/:account_id/verification"
      response={response}
      items={[
        { title: 'cURL', language: 'shell', content: curl },
        { title: 'Node.js', language: 'javascript', content: nodejs },
        { title: 'Python', language: 'python', content: python },
      ]} />
  );
}
