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
      "mch_id": "mch_183",
      "account_number": "4147201234561580"
    }
  }'
`.trim();

const nodejs = `
const account = await method.accounts.create({
  holder_id: 'ent_au22b1fbFJbp8',
  liability: {
    mch_id: 'mch_183',
    account_number: '4147201234561580',
  }
});
`.trim();

const python = `
account = method.accounts.create({
  'holder_id': 'ent_au22b1fbFJbp8',
  'liability': {
    'mch_id': 'mch_183',
    'account_number': '4147201234561580'
  }
})
`.trim();

const response = {
  "id": "acc_Zc4F2aTLt8CBt",
  "holder_id": "ent_au22b1fbFJbp8",
  "type": "liability",
  "liability": {
    "mch_id": "mch_183",
    "mask": "1580",
    "type": "credit_card",
    "data_status": "pending",
    "data_last_successful_sync": null,
    "credit_card": {
      "name": "Chase Sapphire Reserve",
      "balance": null,
      "opened_at": null,
      "last_payment_date": null,
      "last_payment_amount": null,
      "next_payment_due_date": null,
      "next_payment_minimum_amount": null,
      "last_statement_balance": null,
      "remaining_statement_balance": null,
      "available_credit": null,
      "pending_purchase_authorization_amount": null,
      "pending_credit_authorization_amount": null,
      "interest_saving_balance": null,
      "interest_rate_percentage": null,
      "interest_rate_type": null,
    }
  },
  "status": "active",
  "capabilities": [
    "payments:receive"
  ],
  "available_capabilities": [
    "data:sync"
  ],
  "error": null,
  "created_at": "2022-02-16T02:56:19.548Z",
  "updated_at": "2022-02-16T02:56:19.548Z"
};

export default function () {
  return (
    <TabbedCodeBlock
      groupId="all"
      name="quick-start-accounts-create-liability"
      title="POST /accounts"
      response={response}
      items={[
        { title: 'cURL', language: 'shell', content: curl },
        { title: 'Node.js', language: 'javascript', content: nodejs },
        { title: 'Python', language: 'python', content: python },
      ]} />
  );
}
