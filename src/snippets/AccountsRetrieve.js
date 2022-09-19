import React from 'react';
import TabbedCodeBlock from '../components/TabbedCodeBlock';

const curl = `
curl https://production.methodfi.com/accounts/acc_Zc4F2aTLt8CBt \\
  -H "Authorization: Bearer sk_WyZEWVfTcH7GqmPzUPk65Vjc"
`.trim();

const nodejs = `
const account = await method.accounts.get('acc_Zc4F2aTLt8CBt');
`.trim();

const python = `
account = method.accounts.get('acc_Zc4F2aTLt8CBt')
`.trim();

const response = {
  "id": "acc_Zc4F2aTLt8CBt",
  "holder_id": "ent_au22b1fbFJbp8",
  "type": "liability",
  "liability": {
    "mch_id": "mch_183",
    "mask": "1580",
    "type": "credit_card",
    "data_status": "active",
    "data_last_successful_sync": "2022-06-14T15:13:02.546Z",
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
    "data:sync"
  ],
  "available_capabilities": [],
  "error": null,
  "created_at": "2022-02-16T02:56:19.548Z",
  "updated_at": "2022-06-14T15:13:09.520Z"
};

export default function () {
  return (
    <TabbedCodeBlock
      groupId="all"
      name="accounts-retrieve"
      title="GET /accounts/:account_id"
      response={response}
      items={[
        { title: 'cURL', language: 'shell', content: curl },
        { title: 'Node.js', language: 'javascript', content: nodejs },
        { title: 'Python', language: 'python', content: python },
      ]} />
  );
}
