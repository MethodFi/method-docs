import React from 'react';
import TabbedCodeBlock from '../components/TabbedCodeBlock';

const curl = `
curl https://production.methodfi.com/routing_numbers?routing_number=031176110 \\
  -H "Authorization: Bearer sk_WyZEWVfTcH7GqmPzUPk65Vjc"
`.trim();

const nodejs = `
const routingNumber = await method.routingNumbers.get('031176110');
`.trim();

export default function () {
  return (
    <TabbedCodeBlock
      groupId="all"
      name="routing-numbers-retrieve"
      items={[
        { title: 'cURL', language: 'shell', content: curl },
        { title: 'Node.js', language: 'javascript', content: nodejs },
      ]} />
  );
}
