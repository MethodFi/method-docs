import React from 'react';
import TabbedCodeBlock from '../components/TabbedCodeBlock';

const curl = `
curl "https://production.methodfi.com/accounts?holder_id=ent_au22b1fbFJbp8" \\
  -H "Authorization: Bearer sk_WyZEWVfTcH7GqmPzUPk65Vjc"
`.trim();

const nodejs = `
const accounts = await method.accounts.list({ holder_id: 'ent_au22b1fbFJbp8' });
`.trim();

const python = `
accounts = method.accounts.list({ 'holder_id': 'ent_au22b1fbFJbp8' })
`.trim();

const response = `[
  {
    "id": "acc_XaDZc8tE4YVeJ",
    "holder_id": "ent_au22b1fbFJbp8",
    "type": "liability",
    "ach": null,
    "liability": {
      "mch_id": "mch_2347",
      "mask": "4512",
      "type": "auto_loan",
      "data_status": "pending",
      "data_last_successful_sync": null,
      "auto_loan": {
        "name": "Volvo Cars Auto Loan",
        "sub_type": "loan",
        "balance": 6083960,
        "opened_at": null,
        "payoff_amount": null,
        "payoff_amount_term": null,
        "last_payment_amount": 88800,
        "last_payment_date": "2022-05-12",
        "next_payment_due_date": "2022-06-01",
        "next_payment_minimum_amount": 88883,
        "term_length": 84,
        "interest_rate_percentage": 5.7,
        "interest_rate_type": "fixed"
      }
    },
    "status": "active",
    "capabilities": [
      "payments:receive",
      "data:retrieve"
    ],
    "available_capabilities": [
      "data:sync"
    ],
    "error": null,
    "created_at": "2022-02-16T00:47:32.508Z",
    "updated_at": "2022-02-16T00:47:32.508Z"
  },
  {
    "id": "acc_k5NzziUDg7hTg",
    "holder_id": "ent_au22b1fbFJbp8",
    "type": "liability",
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
    "status": "active",
    "capabilities": [
      "payments:receive",
      "data:retrieve"
    ],
    "available_capabilities": [
      "data:sync"
    ],
    "error": null,
    "created_at": "2022-02-16T02:56:19.548Z",
    "updated_at": "2022-02-16T02:56:19.548Z"
  },
  ...
]`;

export default function () {
  return (
    <TabbedCodeBlock
      groupId="all"
      name="accounts-holder-method-data-list"
      title="GET /accounts?holder_id={holder_id}"
      response={response}
      items={[
        { title: 'cURL', language: 'shell', content: curl },
        { title: 'Node.js', language: 'javascript', content: nodejs },
        { title: 'Python', language: 'python', content: python },
      ]} />
  );
}
