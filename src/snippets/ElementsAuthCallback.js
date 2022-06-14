import React from 'react';
import TabbedCodeBlock from '../components/TabbedCodeBlock';

const iframe = `
methodelements://auth
  ?op=success
  &element_type=auth
`.trim();

const react = `
const method = useMethod({
  env: 'production', 
  onEvent: (payload) => {},
  onSuccess: (payload) => {}, // Invoked when auth has successfully completed.
  onError: (payload) => {},
  onExit: (payload) => {},
  onOpen: (payload) => {},
});
`.trim();

const js = `
const config = {
  env: 'production', // dev | sandbox | production
  onEvent: (event) => {
    // Invoked for every event sent by the element.
    // Event is a native MessageEvent instance.
  },
  onSuccess: (payload) => {
    // Invoked when auth has successfully completed.
  },
  onError: (error) => {
    // Invoked when an error is raised during.
  },
  onExit: (payload) => {
    // Invoked when a user exits any element flow, or
    // immediately after an error is raised.
  },
  onOpen : (payload) => {
    // Invoked when an element has successfully launched.
  },
};

const method = new Method(config);
`.trim();

export default function () {
  return (
    <TabbedCodeBlock
      groupId="all"
      name="elements-create-auth-token"
      items={[
        { title: 'HTTP / iFrame', language: 'shell', content: iframe },
        { title: 'React', language: 'javascript', content: react },
        { title: 'Javascript', language: 'javascript', content: js },
      ]} />
  );
}
