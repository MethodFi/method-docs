import * as React from 'react';

export default function ObjectPropItem(props) {
  const {
    name,
    type,
    enums,
    required,
    children,
    isRequest,
  } = props;

  const nameSplit = name.split('.');
  const depth = nameSplit.length - 1;

  return (
    <div id={name}>
      <div className="row" style={{ paddingLeft: `${depth}rem` }}>
        <div className={`col col--${isRequest ? '10' : '12'}`}>
          <div className="container row items-center">
            <a className="custom-hash-link" href={`#${name}`} name={name}>
              <h4 className="padding-right--xs margin-bottom--none">
                <code className="transparent">
                  <span className="text-muted">{nameSplit.slice(0, -1).join('.')}</span>
                  {depth > 0 && '.'}
                  {nameSplit.slice(-1).join()}
                </code>
              </h4>
            </a>
            <span className="text-muted">
              <code className="transparent">{type}</code>
            </span>
          </div>
          <div>
            <div className="text-muted">
              {typeof children === 'string' ? <span>{children}</span> : children}
            </div>
            {enums && (
              <div className="object-prop-item-enums margin-vert--md">
                <div className="object-prop-item-enums-item padding-vert--sm padding-left--md">
                  <strong>Possible enum values</strong>
                </div>
                {enums.map((enumItem) => (
                  <div className="object-prop-item-enums-item padding-vert--sm padding-left--md">
                    <h4 className="margin-bottom--xs">
                      <code className="transparent">{enumItem.name}</code>
                    </h4>
                    <div className="text-muted">{enumItem.children}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        {isRequest && (
          <div className="col col--2">
            <p className={required ? 'text-primary' : 'text-muted'} style={{ textAlign: 'right' }}>
              {required ? 'Required' : 'Optional'}
            </p>
          </div>
        )}
      </div>
      <hr className="margin-vert--sm" style={{ borderWidth: 0.5 }} />
    </div>
  );
}
