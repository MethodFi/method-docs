import React from 'react';
import TabbedCodeBlock from '../components/TabbedCodeBlock';

const curl = `
curl https://production.methodfi.com/accounts/acc_b9q2XVAnNFbp3/verification \\
  -X POST \\
  -H "Authorization: Bearer sk_WyZEWVfTcH7GqmPzUPk65Vjc" \\
  -H "Content-Type: application/json" \\
  -d '{
    "type": "teller",
    "teller": {
      "balances" : {
        "account_id": "acc_ns9gkibeia6ad0rr6s00q",
        "available": "93011.13",
        "ledger": "93011.13",
        "links": {
          "account": "https://api.teller.io/accounts/acc_ns9gkibeia6ad0rr6s00q",
          "self": "https://api.teller.io/accounts/acc_ns9gkibeia6ad0rr6s00q/balances"
        }
      },
      "transactions": [
        {
          "account_id": "acc_ns9gkia42a6ad0rr6s000",
          "amount": "-51.19",
          "date": "2022-01-04",
          "description": "Venmo Payment",
          "details": {
            "category": "services",
            "counterparty": {
              "name": "LOUISE BENTLEY",
              "type": "person"
            },
            "processing_status": "complete"
          },
          "id": "txn_ns9gkiph2a6ad0rr6s000",
          "links": {
            "account": "https://api.teller.io/accounts/acc_ns9gkia42a6ad0rr6s000",
            "self": "https://api.teller.io/accounts/acc_ns9gkia42a6ad0rr6s000/transactions/txn_ns9gkiph2a6ad0rr6s000"
          },
          "running_balance": null,
          "status": "pending",
          "type": "digital_payment"
        }
      ]
    }
  }'
`.trim();

const nodejs = `
const verification = await method
  .accounts('acc_b9q2XVAnNFbp3')
  .verification
  .create({
    type: 'teller',
    teller: {
      balances: {
        account_id: 'acc_ns9gkibeia6ad0rr6s00q',
        available: '93011.13',
        ledger: '93011.13',
        links: {
          account: 'https://api.teller.io/accounts/acc_ns9gkibeia6ad0rr6s00q',
          self: 'https://api.teller.io/accounts/acc_ns9gkibeia6ad0rr6s00q/balances'
        },
      },
      transactions: [
        {
          account_id: 'acc_ns9gkia42a6ad0rr6s000',
          amount: '-51.19',
          date: '2022-01-04',
          description: 'Venmo Payment',
          details: {
            category: 'services',
            counterparty: {
              name: 'LOUISE BENTLEY',
              type: 'person',
            },
            processing_status: 'complete',
          },
          id: 'txn_ns9gkiph2a6ad0rr6s000',
          links: {
            account: 'https://api.teller.io/accounts/acc_ns9gkia42a6ad0rr6s000',
            self: 'https://api.teller.io/accounts/acc_ns9gkia42a6ad0rr6s000/transactions/txn_ns9gkiph2a6ad0rr6s000',
          },
          running_balance: null,
          status: 'pending',
          type: 'digital_payment',
        },
      ],
    },
  });
`.trim();

const python = `
verification = method
  .accounts('acc_b9q2XVAnNFbp3')
  .verification
  .create({
    'type': 'teller',
    'teller': {
      'balances': {
        'account_id': 'acc_ns9gkibeia6ad0rr6s00q',
        'available': '93011.13',
        'ledger': '93011.13',
        'links': {
          'account': 'https://api.teller.io/accounts/acc_ns9gkibeia6ad0rr6s00q',
          'self': 'https://api.teller.io/accounts/acc_ns9gkibeia6ad0rr6s00q/balances'
        }
      },
      'transactions': [
        {
          'account_id': 'acc_ns9gkia42a6ad0rr6s000',
          'amount': '-51.19',
          'date': '2022-01-04',
          'description': 'Venmo Payment',
          'details': {
            'category': 'services',
            'counterparty': {
              'name': 'LOUISE BENTLEY',
              'type': 'person'
            },
            'processing_status': 'complete'
          },
          'id': 'txn_ns9gkiph2a6ad0rr6s000',
          'links': {
            'account': 'https://api.teller.io/accounts/acc_ns9gkia42a6ad0rr6s000',
            'self': 'https://api.teller.io/accounts/acc_ns9gkia42a6ad0rr6s000/transactions/txn_ns9gkiph2a6ad0rr6s000'
          },
          'running_balance': None,
          'status': 'pending',
          'type': 'digital_payment'
        }
      ]
    }
  })
`.trim();

export default function () {
  return (
    <TabbedCodeBlock
      groupId="all"
      name="verification-create-teller"
      items={[
        { title: 'cURL', language: 'shell', content: curl },
        { title: 'Node.js', language: 'javascript', content: nodejs },
        { title: 'Python', language: 'python', content: python },
      ]} />
  );
}
