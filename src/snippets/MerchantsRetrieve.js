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

export default function () {
  return (
    <TabbedCodeBlock
      groupId="all"
      name="merchants-retrieve"
      items={[
        { title: 'cURL', language: 'shell', content: curl },
        { title: 'Node.js', language: 'javascript', content: nodejs },
        { title: 'Python', language: 'python', content: python },
      ]} />
  );
}
