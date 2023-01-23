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
      "mask": "0966",
      "type": "auto_loan",
      "payment_status": "active",
      "data_status": "active",
      "data_last_successful_sync": "2022-06-14T15:13:02.546Z",
      "data_status_error": null,
      "data_source": "financial_institution",
      "data_updated_at": "2023-01-22T01:23:36.047Z",
      "ownership": "primary",
      "auto_loan": {
        "name": "Volvo Cars Auto Loan",
        "sub_type": "loan",
        "vin": "YV1CZ882XJ1234567",
        "balance": 6083960,
        "principal_balance": 6073960,
        "original_loan_amount": null,
        "opened_at": null,
        "payoff_amount": null,
        "payoff_amount_term": null,
        "last_payment_amount": 88800,
        "last_payment_date": "2022-05-12",
        "next_payment_due_date": "2022-06-01",
        "next_payment_minimum_amount": 88883,
        "term_length": 84,
        "interest_rate_percentage": 5.7,
        "interest_rate_type": "fixed",
        "interest_rate_source": "financial_institution",
        "delinquent_status": null,
        "delinquent_amount": null,
        "delinquent_period": null,
        "delinquent_action": null,
        "delinquent_start_date": null,
        "delinquent_major_start_date": null,
        "delinquent_status_updated_at": null,
        "delinquent_history": [],
        "mileage_allocation": null,
        "per_diem_amount": null,
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
      "mask": "1580",
      "type": "credit_card",
      "payment_status": "active",
      "data_status": "active",
      "data_status_error": null,
      "data_last_successful_sync": "2023-01-22T01:23:36.047Z",
      "data_source": "financial_institution",
      "data_updated_at": "2023-01-22T01:23:36.047Z",
      "ownership": "authorized",
      "credit_card": {
        "name": "Chase Sapphire Reserve",
        "balance": 750014,
        "opened_at": "2016-11-25",
        "last_payment_date": "2022-12-28",
        "last_payment_amount": 451757,
        "next_payment_due_date": "2023-01-27",
        "next_payment_minimum_amount": 6500,
        "last_statement_balance": 650043,
        "remaining_statement_balance": 0,
        "available_credit": 1530000,
        "interest_rate_percentage": 23.5,
        "interest_rate_type": "variable",
        "interest_rate_source": "financial_institution",
        "past_due_status": "unknown",
        "past_due_balance": null,
        "past_due_date": null,
        "auto_pay_status": "unknown",
        "auto_pay_amount": null,
        "auto_pay_date": null,
        "sub_type": "flexible_spending",
        "term_length": null,
        "closed_at": null,
        "credit_limit": 2380000,
        "next_statement_date": "2022-12-02",
        "delinquent_status": null,
        "delinquent_amount": null,
        "delinquent_period": null,
        "delinquent_action": null,
        "delinquent_start_date": null,
        "delinquent_major_start_date": null,
        "delinquent_status_updated_at": null,
        "delinquent_history": []
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
