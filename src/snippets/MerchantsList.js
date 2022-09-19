import React from 'react';
import TabbedCodeBlock from '../components/TabbedCodeBlock';

const curl = `
curl https://production.methodfi.com/merchants \\
  -H "Authorization: Bearer sk_WyZEWVfTcH7GqmPzUPk65Vjc"
`.trim();

const nodejs = `
const merchants = await method.merchants.list();
`.trim();

const python = `
merchants = method.merchants.list()
`.trim();

const response = {
  "data": [
    {
      "mch_id": "mch_1",
      "parent_name": "Chase",
      "name": "Chase - Credit Cards",
      "logo": "https://static.methodfi.com/mch-logos/1616215578688-chase.png",
      "description": "Chase Mastercard & Visa",
      "note": "For Credit Card Accounts Only",
      "types": [
        "credit_card"
      ],
      "account_prefixes": [
        "403116",
        "438857"
      ],
      "provider_ids": {
        "plaid": ["ins_3"],
        "mx": ["chase"],
        "finicity": ["5"]
      }
    },
    {
      "mch_id": "mch_21",
      "parent_name": "FedLoan",
      "name": "FedLoan Servicing",
      "logo": "https://static.methodfi.com/mch-logos/1616215578688-fedloan.png",
      "description": null,
      "note": null,
      "types": [
        "student_loan"
      ],
      "account_prefixes": [
        "5655"
      ],
      "provider_ids": {
        "plaid": ["ins_116527"],
        "mx": [],
        "finicity": ["100302"]
      }
    },
    {
      "mch_id": "mch_231",
      "parent_name": "Wells Fargo",
      "name": "Wells Fargo - Home Mortgage",
      "logo": "https://static.methodfi.com/mch-logos/1616215578688-wells-fargo.png",
      "description": null,
      "note": null,
      "types": [
        "mortgage"
      ],
      "account_prefixes": [],
      "provider_ids": {
        "plaid": [],
        "mx": [],
        "finicity": []
      }
    }
  ]
};

export default function () {
  return (
    <TabbedCodeBlock
      groupId="all"
      title="GET /merchants"
      response={response}
      name="merchants-list"
      items={[
        { title: 'cURL', language: 'shell', content: curl },
        { title: 'Node.js', language: 'javascript', content: nodejs },
        { title: 'Python', language: 'python', content: python },
      ]} />
  );
}
