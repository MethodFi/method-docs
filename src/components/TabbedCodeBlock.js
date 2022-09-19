import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

function translateTitle(title) {
  if (!title) return null;
  const [method, ...rest] = title.split(' ');

  switch (method) {
    case 'GET': return <div><strong className="text-info">{method}</strong> <code className="transparent">{rest.join('')}</code></div>
    case 'POST': return <div><strong className="text-success">{method}</strong> <code className="transparent">{rest.join('')}</code></div>
    case 'PUT': return <div><strong className="text-warning">{method}</strong> <code className="transparent">{rest.join('')}</code></div>
    case 'DELETE': return <div><strong className="text-danger">{method}</strong> <code className="transparent">{rest.join('')}</code></div>
    default: return title.join('');
  }
}

export default function TabbedCodeBlock(props) {
  const {
    groupId,
    name,
    items,
    title,
    response,
  } = props;

  return (
    <div>
      <Tabs groupId={groupId}>
        {items.map((item) => (
          <TabItem
            key={`${name}-${item.language}-${Math.random().toString()}`}
            value={item.title}>
            <CodeBlock
              className={`language-${item.language}`}
              title={translateTitle(title)}>
              {item.content}
            </CodeBlock>
          </TabItem>
        ))}
      </Tabs>
      {response && (
        <CodeBlock className="language-json" title="RESPONSE">
          {typeof response === 'string' ? response : JSON.stringify(response, null, 2)}
        </CodeBlock>
      )}
    </div>
  );
}
