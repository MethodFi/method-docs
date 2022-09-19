import React from 'react';
import TabbedCodeBlock from '../components/TabbedCodeBlock';

const curl = `
curl https://production.methodfi.com/elements/accounts/exchange \\
  -X POST \\
  -H "Authorization: Bearer sk_WyZEWVfTcH7GqmPzUPk65Vjc" \\
  -H "Content-Type: application/json" \\
  -d '{
    "public_account_token": "pk_acc_iZKeBTmnmw3aSGePcfdweUEJTBXwsfR4"
  }'
`.trim();

const nodejs = `
const account = await method
  .elements
  .exchangePublicAccountToken('pk_acc_iZKeBTmnmw3aSGePcfdweUEJTBXwsfR4');
`.trim();

const python = `
account = method
  .elements
  .exchange_public_account_token('pk_acc_iZKeBTmnmw3aSGePcfdweUEJTBXwsfR4')
`.trim();

const response = {
  "id": "acc_Zc4F2aTLt8CBt",
  "holder_id": "ent_au22b1fbFJbp8",
  "type": "liability",
  "ach": null,
  "liability": {
    "mch_id": "mch_183",
    "mask": "6382",
    "type": "credit_card",
    "data_status": "pending",
    "data_last_successful_sync": null,
    "credit_card": {
      "name": "Chase Sapphire Reserve",
      "balance": 550472,
      "opened_at": "2016-11-25",
      "last_payment_date": "2022-05-27",
      "last_payment_amount": 361000,
      "next_payment_due_date": null,
      "next_payment_minimum_amount": null,
      "last_statement_balance": 760501,
      "remaining_statement_balance": 0,
      "available_credit": 1788500,
      "pending_purchase_authorization_amount": 54136,
      "pending_credit_authorization_amount": null,
      "interest_saving_balance": null,
      "interest_rate_percentage": 21.75,
      "interest_rate_type": "variable"
    }
  },
  "clearing": null,
  "status": "active",
  "capabilities": [
    "payments:receive",
    "data:sync"
  ],
  "error": null,
  "created_at": "2020-12-09T02:56:19.548Z",
  "updated_at": "2020-12-09T02:56:19.548Z"
};

export default function () {
  return (
    <TabbedCodeBlock
      groupId="all"
      name="elements-exchange-public-account-token"
      title="POST /elements/accounts/exchange"
      response={response}
      items={[
        { title: 'cURL', language: 'shell', content: curl },
        { title: 'Node.js', language: 'javascript', content: nodejs },
        { title: 'Python', language: 'python', content: python },
      ]} />
  );
}
