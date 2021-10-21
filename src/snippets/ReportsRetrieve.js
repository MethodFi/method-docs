import React from 'react';
import TabbedCodeBlock from '../components/TabbedCodeBlock';

const curl = `
curl https://production.methodfi.com/reports/rpt_cj2mkA3hFyHT5 \\
  -H "Authorization: Bearer sk_WyZEWVfTcH7GqmPzUPk65Vjc"
`.trim();

const nodejs = `
const report = await method.reports.get('rpt_cj2mkA3hFyHT5');
`.trim();

export default function () {
  return (
    <TabbedCodeBlock
      groupId="all"
      name="reports-retrieve"
      items={[
        { title: 'cURL', language: 'shell', content: curl },
        { title: 'Node.js', language: 'javascript', content: nodejs },
      ]} />
  );
}
