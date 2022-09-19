import React from 'react';
import TabbedCodeBlock from '../components/TabbedCodeBlock';

const curl = `
curl https://production.methodfi.com/accounts/acc_b9q2XVAnNFbp3/verification \\
  -H "Authorization: Bearer sk_WyZEWVfTcH7GqmPzUPk65Vjc"
`.trim();

const nodejs = `
const verification = await method
  .accounts('acc_b9q2XVAnNFbp3')
  .verification
  .get();
`.trim();

const python = `
verification = method
  .accounts('acc_b9q2XVAnNFbp3')
  .verification
  .get()
`.trim();

const response = {
  "id": "vrf_73TAQ8njUFsLJ",
  "status": "initiated",
  "type": "micro_deposits",
  "error": null,
  "initiated_at": "2021-10-12T20:42:46.433Z",
  "pending_at": "1970-01-01T00:00:00.000Z",
  "verified_at": "1970-01-01T00:00:00.000Z",
  "disabled_at": "1970-01-01T00:00:00.000Z",
  "created_at": "2021-10-12T20:42:46.433Z",
  "updated_at": "2021-10-12T20:42:46.433Z"
};

export default function () {
  return (
    <TabbedCodeBlock
      groupId="all"
      name="verification-retrieve"
      title="GET /accounts/:account_id/verification"
      response={response}
      items={[
        { title: 'cURL', language: 'shell', content: curl },
        { title: 'Node.js', language: 'javascript', content: nodejs },
        { title: 'Python', language: 'python', content: python },
      ]} />
  );
}
