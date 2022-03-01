import React from 'react';
import TabbedCodeBlock from '../components/TabbedCodeBlock';

const curl = `
curl "https://production.methodfi.com/payments?source=acc_JMJZT6r7iHi8e&status=pending" \\
  -H "Authorization: Bearer sk_WyZEWVfTcH7GqmPzUPk65Vjc"
`.trim();

const nodejs = `
const payments = await method.payments.list({
  source: 'acc_JMJZT6r7iHi8e',
  status: 'pending',
});
`.trim();

const python = `
payments = method.payments.list({
  'source': 'acc_JMJZT6r7iHi8e',
  'status': 'pending'
})
`.trim();

export default function () {
  return (
    <TabbedCodeBlock
      groupId="all"
      name="payments-list-with-filters"
      items={[
        { title: 'cURL', language: 'shell', content: curl },
        { title: 'Node.js', language: 'javascript', content: nodejs },
        { title: 'Python', language: 'python', content: python },
      ]} />
  );
}
