import * as React from 'react';

export default function EnumsList(props) {
  const {
    title,
    items,
  } = props;

  return (
    <div className="object-prop-item-enums margin-vert--md">
      {title && (
        <div className="object-prop-item-enums-item padding-vert--sm padding-left--md text-white">
          <strong>{title}</strong>
        </div>
      )}
      {items.map((enumItem) => (
        <div className="object-prop-item-enums-item padding-vert--sm padding-left--md">
          <h4 className="margin-bottom--xs">
            <code className="transparent text-white">{enumItem.name}</code>
          </h4>
          <div className="text-muted">{enumItem.children}</div>
        </div>
      ))}
    </div>
  );
}
