import React from 'react';
import TabbedCodeBlock from '../components/TabbedCodeBlock';

const curl = `
curl https://production.methodfi.com/reports/rpt_cj2mkA3hFyHT5/download \\
  -H "Authorization: Bearer sk_WyZEWVfTcH7GqmPzUPk65Vjc"
`.trim();

const nodejs = `
const reportCSV = await method.reports.download('rpt_cj2mkA3hFyHT5');
`.trim();

const python = `
report_csv = method.reports.download('rpt_cj2mkA3hFyHT5')
`.trim();

export default function () {
  return (
    <TabbedCodeBlock
      groupId="all"
      name="reports-download"
      title="GET /reports/:report_id/download"
      response={{}}
      items={[
        { title: 'cURL', language: 'shell', content: curl },
        { title: 'Node.js', language: 'javascript', content: nodejs },
        { title: 'Python', language: 'python', content: python },
      ]} />
  );
}
