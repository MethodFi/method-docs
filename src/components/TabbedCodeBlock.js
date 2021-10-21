import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

export default function TabbedCodeBlock(props) {
  const {
    groupId,
    name,
    items,
  } = props;
  return (
    <Tabs groupId={groupId}>
      {items.map((item) => (
        <TabItem key={`${name}-${item.language}-${Math.random().toString()}`} value={item.title}>
          <CodeBlock className={`language-${item.language}`}>
            {item.content}
          </CodeBlock>
        </TabItem>
      ))}
    </Tabs>
  );
}
