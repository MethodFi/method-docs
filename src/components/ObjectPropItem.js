import * as React from 'react';
import EnumsList from './EnumsList';

export default function ObjectPropItem(props) {
  const {
    name,
    type,
    enums,
    required,
    children,
    isRequest,
    ignoreIndent
  } = props;

  const nameSplit = name.split('.');
  const depth = nameSplit.length - 1;

  return (
    <div id={name}>
      <div className="row" style={{ paddingLeft: ignoreIndent ? '0rem' : `${depth}rem` }}>
        <div className={`col col--${isRequest ? '10' : '12'}`}>
          <div className="container row items-center">
            <a className="custom-hash-link" href={`#${name}`} name={name}>
              <h4 className="padding-right--xs margin-bottom--none">
                {ignoreIndent && <code className="transparent">{name}</code>}
                {!ignoreIndent && (
                  <code className="transparent">
                    <span className="text-muted">{nameSplit.slice(0, -1).join('.')}</span>
                    {depth > 0 && '.'}
                    {nameSplit.slice(-1).join()}
                  </code>
                )}
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
            {enums && <EnumsList title="Possible enum values" items={enums} />}
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
