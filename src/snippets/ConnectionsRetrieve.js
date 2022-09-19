import React from 'react';
import TabbedCodeBlock from '../components/TabbedCodeBlock';

const curl = `
curl https://production.methodfi.com/connections/cxn_iENwAPKnNqA5j \\
  -H "Authorization: Bearer sk_WyZEWVfTcH7GqmPzUPk65Vjc"
`.trim();

const nodejs = `
const connection = await method.connections.get('cxn_iENwAPKnNqA5j');
`.trim();

const python = `
connection = method.connections.get('cxn_iENwAPKnNqA5j')
`.trim();

const response = {
  "id": "cxn_iENwAPKnNqA5j",
  "entity_id": "ent_au22b1fbFJbp8",
  "accounts": [
    "acc_XaDZc8tE4YVeJ",
    "acc_k5NzziUDg7hTg",
    "acc_p3xR5ne3iAX6g",
    "acc_mDDi64jzWUgSx",
    "acc_EpcLnJSkSCnRM"
  ],
  "source": "method_data",
  "status": "success",
  "error": null,
  "created_at": "2022-02-16T18:02:21.866Z",
  "updated_at": "2022-02-20T22:50:45.391Z",
  "last_synced_at": "2022-02-20T22:50:45.391Z"
};

export default function () {
  return (
    <TabbedCodeBlock
      groupId="all"
      name="connections-retrieve"
      title="GET /connections/:connectionId"
      response={response}
      items={[
        { title: 'cURL', language: 'shell', content: curl },
        { title: 'Node.js', language: 'javascript', content: nodejs },
        { title: 'Python', language: 'python', content: python },
      ]} />
  );
}
