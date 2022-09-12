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
