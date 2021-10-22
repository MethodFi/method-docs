import React from 'react';
import TabbedCodeBlock from '../components/TabbedCodeBlock';

const curl = `
curl https://production.methodfi.com/accounts/acc_b9q2XVAnNFbp3/verification \\
  -X POST \\
  -H "Authorization: Bearer sk_WyZEWVfTcH7GqmPzUPk65Vjc" \\
  -H "Content-Type: application/json" \\
  -d '{
    "type": "mx",
    "mx": {
      "account" : {
        "institution_code": "chase",
        "guid": "ACT-06d7f44b-caae-0f6e-1384-01f52e75dcb1",
        "account_number": null,
        "apr": null,
        "apy": null,
        "available_balance": 1000.23,
        "available_credit": null,
        "balance": 1000.23,
        "cash_balance": 1000.32,
        "cash_surrender_value": 1000.23,
        "created_at": "2016-10-13T17:57:37+00:00",
        ...
      },
      "transactions": [
        {
          "account_guid": "ACT-06d7f44b-caae-0f6e-1384-01f52e75dcb1",
          "amount": 61.11,
          "category": "Groceries",
          "check_number": 15234,
          "check_number_string": "00015234",
          "created_at": "2016-10-06T09:43:42+00:00",
          "currency_code": "USD",
          "date": "2013-09-23",
          "description": "Whole Foods",
          "guid": "TRN-265abee9-889b-af6a-c69b-25157db2bdd9",
          "is_bill_pay": false,
          "is_direct_deposit": false,
          "is_expense": true,
          "is_fee": false,
          "is_income": false,
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
    type: 'mx',
    mx: {
      account : {
        institution_code: 'chase',
        guid: 'ACT-06d7f44b-caae-0f6e-1384-01f52e75dcb1',
        account_number: null,
        apr: null,
        apy: null,
        available_balance: 1000.23,
        available_credit: null,
        balance: 1000.23,
        cash_balance: 1000.32,
        cash_surrender_value: 1000.23,
        created_at: '2016-10-13T17:57:37+00:00',
        ...
      },
      transactions: [
        ...
      ],
    },  
  );
`.trim();

const python = `
verification = method
  .accounts('acc_b9q2XVAnNFbp3')
  .verification
  .create({
    'type': 'mx',
    'mx': {
      'account ': {
        'institution_code': 'chase',
        'guid': 'ACT-06d7f44b-caae-0f6e-1384-01f52e75dcb1',
        'account_number': None,
        'apr': None,
        'apy': None,
        'available_balance': 1000.23,
        'available_credit': None,
        'balance': 1000.23,
        'cash_balance': 1000.32,
        'cash_surrender_value': 1000.23,
        'created_at': '2016-10-13T17:57:37+00:00'
        ...
      },
      'transactions': [
        ...
      ]
    } 
  )
`.trim();

export default function () {
  return (
    <TabbedCodeBlock
      groupId="all"
      name="verification-create-mx"
      items={[
        { title: 'cURL', language: 'shell', content: curl },
        { title: 'Node.js', language: 'javascript', content: nodejs },
        { title: 'Python', language: 'python', content: python },
      ]} />
  );
}
