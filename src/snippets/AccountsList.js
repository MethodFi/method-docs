import React from 'react';
import TabbedCodeBlock from '../components/TabbedCodeBlock';

const curl = `
curl https://production.methodfi.com/accounts \\
  -H "Authorization: Bearer sk_WyZEWVfTcH7GqmPzUPk65Vjc"
`.trim();

const nodejs = `
const accounts = await method.accounts.list();
`.trim();

const python = `
accounts = method.accounts.list()
`.trim();

const response = {
  "data": [
    {
      "id": "acc_b9q2XVAnNFbp3",
      "holder_id": "ent_y1a9e1fbnJ1f3",
      "type": "ach",
      "ach": {
        "routing": "367537407",
        "number": "57838927",
        "type": "checking"
      },
      "liability": null,
      "clearing": null,
      "metadata": null,
      "status": "active",
      "capabilities": [
        "payments:receive"
      ],
      "error": null,
      "created_at": "2020-12-09T00:40:51.107Z",
      "updated_at": "2020-12-09T00:40:51.107Z"
    },
    {
      "id": "acc_Zc4F2aTLt8CBt",
      "holder_id": "ent_au22b1fbFJbp8",
      "type": "liability",
      "ach": null,
      "liability": {
        "mch_id": "mch_2",
        "mask": "4455",
        "type": "student_loan",
        "data_status": "pending",
        "data_last_successful_sync": null,
        "student_loan": {
          "name": "FedLoan Student Loan",
          "sub_type": "federal",
          "sequence": 6,
          "balance": 1952634,
          "last_payment_amount": 1150,
          "last_payment_date": "2022-04-22",
          "next_payment_due_date": "2022-10-28",
          "next_payment_minimum_amount": 0,
          "disbursed_at": "2018-01-22",
          "interest_rate_percentage": 3.4,
          "interest_rate_type": "fixed"
        }
      },
      "clearing": null,
      "metadata": null,
      "status": "active",
      "capabilities": [
        "payments:receive",
        "data:sync"
      ],
      "error": null,
      "created_at": "2020-12-09T02:56:19.548Z",
      "updated_at": "2020-12-09T02:56:19.548Z"
    },
    {
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
    }
  ]
};

export default function () {
  return (
    <TabbedCodeBlock
      groupId="all"
      name="accounts-list"
      title="GET /accounts"
      response={response}
      items={[
        { title: 'cURL', language: 'shell', content: curl },
        { title: 'Node.js', language: 'javascript', content: nodejs },
        { title: 'Python', language: 'python', content: python },
      ]} />
  );
}
