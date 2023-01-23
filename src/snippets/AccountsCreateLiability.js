import React from 'react';
import TabbedCodeBlock from '../components/TabbedCodeBlock';

const curl = `
curl https://production.methodfi.com/accounts \\
  -X POST \\
  -H "Authorization: Bearer sk_WyZEWVfTcH7GqmPzUPk65Vjc" \\
  -H "Content-Type: application/json" \\
  -d '{
    "holder_id": "ent_au22b1fbFJbp8",
    "liability": {
      "mch_id": "mch_2",
      "number": "1122334455"
    }
  }'
`.trim();

const nodejs = `
const account = await method.accounts.create({
  holder_id: 'ent_au22b1fbFJbp8',
  liability: {
    mch_id: 'mch_2',
    number: '1122334455',
  }
});
`.trim();

const python = `
account = method.accounts.create({
  'holder_id': 'ent_au22b1fbFJbp8',
  'liability': {
    'mch_id': 'mch_2',
    'number': '1122334455'
  }
})
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
    "payment_status": "active",
    "data_status": "active",
    "data_last_successful_sync": "2022-06-14T15:13:02.546Z",
    "data_status_error": null,
    "data_source": "financial_institution",
    "data_updated_at": "2023-01-22T01:23:36.047Z",
    "ownership": "primary",
    "student_loan": {
      "name": "FedLoan Student Loan",
      "sub_type": "federal",
      "sequence": 6,
      "balance": 1952634,
      "original_loan_amount": null,
      "last_payment_amount": 1150,
      "last_payment_date": "2022-04-22",
      "next_payment_due_date": "2022-10-28",
      "next_payment_minimum_amount": 0,
      "disbursed_at": "2018-01-22",
      "interest_rate_percentage": 3.4,
      "interest_rate_type": "fixed",
      "interest_rate_source": "financial_institution",
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
      name="accounts-create-liability"
      title="POST /accounts"
      response={response}
      items={[
        { title: 'cURL', language: 'shell', content: curl },
        { title: 'Node.js', language: 'javascript', content: nodejs },
        { title: 'Python', language: 'python', content: python },
      ]} />
  );
}
