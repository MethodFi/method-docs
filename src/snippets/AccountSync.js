import React from 'react';
import TabbedCodeBlock from '../components/TabbedCodeBlock';

const curl = `
curl https://production.methodfi.com/accounts/acc_Zc4F2aTLt8CBt/syncs \\
  -X POST \\
  -H "Authorization: Bearer sk_WyZEWVfTcH7GqmPzUPk65Vjc"
`.trim();

const nodejs = `
const account = await method.accounts('acc_Zc4F2aTLt8CBt').syncs.create();
`.trim();

const python = `
account = method.accounts('acc_Zc4F2aTLt8CBt').syncs.create()
`.trim();

const response = {
  "data": {
    "id": "acc_sync_6d94yUUMjbcXL",
    "acc_id": "acc_Zc4F2aTLt8CBt",
    "status": "in_progress",
    "error": null,
    "created_at": "2022-06-14T15:10:28.213Z",
    "updated_at": "2022-06-14T15:10:28.213Z"
  }
};

export default function () {
  return (
    <TabbedCodeBlock
      groupId="all"
      name="accounts-list"
      title="POST /accounts/:account_id/syncs"
      response={response}
      items={[
        { title: 'cURL', language: 'shell', content: curl },
        { title: 'Node.js', language: 'javascript', content: nodejs },
        { title: 'Python', language: 'python', content: python },
      ]} />
  );
}
