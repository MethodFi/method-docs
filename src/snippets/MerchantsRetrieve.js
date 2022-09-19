import React from 'react';
import TabbedCodeBlock from '../components/TabbedCodeBlock';

const curl = `
curl https://production.methodfi.com/merchants/mch_1 \\
  -H "Authorization: Bearer sk_WyZEWVfTcH7GqmPzUPk65Vjc"
`.trim();

const nodejs = `
const merchant = await method.merchants.get('mch_1');
`.trim();

const python = `
merchant = method.merchants.get('mch_1')
`.trim();

const response = {
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
};

export default function () {
  return (
    <TabbedCodeBlock
      groupId="all"
      title="GET /merchants/:mch_id"
      response={response}
      name="merchants-retrieve"
      items={[
        { title: 'cURL', language: 'shell', content: curl },
        { title: 'Node.js', language: 'javascript', content: nodejs },
        { title: 'Python', language: 'python', content: python },
      ]} />
  );
}
