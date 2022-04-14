import React from 'react';
import TabbedCodeBlock from '../components/TabbedCodeBlock';

const curl = `
curl "https://production.methodfi.com/accounts?holder_id=ent_au22b1fbFJbp8" \\
  -H "Authorization: Bearer sk_WyZEWVfTcH7GqmPzUPk65Vjc"
`.trim();

const nodejs = `
const accounts = await method.accounts.list({ holder_id: 'ent_au22b1fbFJbp8' });
`.trim();

const python = `
accounts = method.accounts.list({ 'holder_id': 'ent_au22b1fbFJbp8' })
`.trim();

export default function () {
  return (
    <TabbedCodeBlock
      groupId="all"
      name="accounts-holder-method-data-list"
      items={[
        { title: 'cURL', language: 'shell', content: curl },
        { title: 'Node.js', language: 'javascript', content: nodejs },
        { title: 'Python', language: 'python', content: python },
      ]} />
  );
}
