import React from 'react';
import TabbedCodeBlock from '../components/TabbedCodeBlock';

const curl = `
curl https://production.methodfi.com/reports \\
  -X POST \\
  -H "Authorization: Bearer sk_WyZEWVfTcH7GqmPzUPk65Vjc" \\
  -H "Content-Type: application/json" \\
  -d '{
    "type": "payments.created.current"
  }'
`.trim();

const nodejs = `
const report = await method.reports.create({ type: 'payments.created.current' });
`.trim();

const python = `
report = method.reports.create({ 'type': 'payments.created.current' })
`.trim();

const response = {
  "id": "rpt_cj2mkA3hFyHT5",
  "type": "payments.created.current",
  "url": "https://production.methodfi.com/reports/rpt_cj2mkA3hFyHT5/download",
  "status": "completed",
  "metadata": null,
  "created_at": "2021-08-25T23:18:05.261Z",
  "updated_at": "2021-08-25T23:18:05.261Z"
};

export default function () {
  return (
    <TabbedCodeBlock
      groupId="all"
      name="reports-create"
      title="POST /reports"
      response={response}
      items={[
        { title: 'cURL', language: 'shell', content: curl },
        { title: 'Node.js', language: 'javascript', content: nodejs },
        { title: 'Python', language: 'python', content: python },
      ]} />
  );
}
