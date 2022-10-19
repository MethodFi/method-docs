import React from 'react';
import TabbedCodeBlock from '../components/TabbedCodeBlock';

const curl = `
curl https://production.methodfi.com/entities/ent_au22b1fbFJbp8/credit_score \\
  -H "Authorization: Bearer sk_WyZEWVfTcH7GqmPzUPk65Vjc"
`.trim();

const nodejs = `
const entity = await method.entities.getCreditScore('ent_au22b1fbFJbp8');
`.trim();

const python = `
entity = method.entities.get_credit_score('ent_au22b1fbFJbp8')
`.trim();

const response = {
  "score": 806,
  "updated_at": "2022-10-10",
};

export default function () {
  return (
    <TabbedCodeBlock
      groupId="all"
      name="entities-retrieve-credit-score"
      title="GET /entities/:entity_id/credit_score"
      response={response}
      items={[
        { title: 'cURL', language: 'shell', content: curl },
        { title: 'Node.js', language: 'javascript', content: nodejs },
        { title: 'Python', language: 'python', content: python },
      ]} />
  );
}
