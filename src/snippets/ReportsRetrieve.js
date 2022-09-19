import React from 'react';
import TabbedCodeBlock from '../components/TabbedCodeBlock';

const curl = `
curl https://production.methodfi.com/reports/rpt_cj2mkA3hFyHT5 \\
  -H "Authorization: Bearer sk_WyZEWVfTcH7GqmPzUPk65Vjc"
`.trim();

const nodejs = `
const report = await method.reports.get('rpt_cj2mkA3hFyHT5');
`.trim();

const python = `
report = method.reports.get('rpt_cj2mkA3hFyHT5')
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
      name="reports-retrieve"
      title="GET /reports/:report_id"
      response={response}
      items={[
        { title: 'cURL', language: 'shell', content: curl },
        { title: 'Node.js', language: 'javascript', content: nodejs },
        { title: 'Python', language: 'python', content: python },
      ]} />
  );
}
