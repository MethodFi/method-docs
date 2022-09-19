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

const response = {
  "id": "vrf_73TAQ8njUFsLJ",
  "status": "verified",
  "type": "teller",
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
      name="verification-create-teller"
      title="POST /accounts/:account_id/verification"
      response={response}
      items={[
        { title: 'cURL', language: 'shell', content: curl },
        { title: 'Node.js', language: 'javascript', content: nodejs },
        { title: 'Python', language: 'python', content: python },
      ]} />
  );
}
