import React from 'react';
import TabbedCodeBlock from '../components/TabbedCodeBlock';

const curl = `
curl https://production.methodfi.com/routing_numbers?routing_number=031176110 \\
  -H "Authorization: Bearer sk_WyZEWVfTcH7GqmPzUPk65Vjc"
`.trim();

const nodejs = `
const routingNumber = await method.routingNumbers.get('031176110');
`.trim();

const python = `
routing_number = method.routing_numbers.get('031176110')
`.trim();

const response = {
  "id": "rtn_9xs4xQn4ZAmMK",
  "institution_name": "CAPITAL ONE N.A.",
  "routing_number": "031176110",
  "logo": "https://s3.us-west-2.amazonaws.com/static.methodfi.com/ins-logos/1623725401472-capital-one-na.png",
  "office_type": "main",
  "change_date": "2016-05-25T05:00:00.000Z",
  "address": {
    "line1": "PO BOX 85139",
    "line2": null,
    "state": "VA",
    "city": "RICHMOND",
    "zip": "23238"
  },
  "phone": "844-309-0809"
};

export default function () {
  return (
    <TabbedCodeBlock
      groupId="all"
      name="routing-numbers-retrieve"
      title="GET /routing_numbers?routing_number={routingNumber}"
      response={response}
      items={[
        { title: 'cURL', language: 'shell', content: curl },
        { title: 'Node.js', language: 'javascript', content: nodejs },
        { title: 'Python', language: 'python', content: python },
      ]} />
  );
}
