import * as React from 'react';
import StickyBox from 'react-sticky-box';
import ObjectPropItem from './ObjectPropItem';
import TabbedCodeBlock from './TabbedCodeBlock';

export default function ObjectPropList(props) {
  const {
    fields,
    snippets,
    snippetsElement,
    returns,
    isRequest,
    about,
    title,
  } = props;
  return (
    <div>
      <div className="row">
        <div className="col col--6">
          {/* Title */}
          <h1>{title}</h1>
          {/* About */}
          {about && <div className="margin-vert--lg">{about}</div>}

          {/* Attributes */}
          <div>
            {fields && (
              <h3 className="margin-vert--none">
                {isRequest ? 'Parameters' : 'Attributes'}
              </h3>
            )}
            <hr className="margin-vert--md" style={{ borderWidth: 0.5 }} />
          </div>
          {fields && (fields.length === 0 && isRequest) && <p className="text-muted">No parameters</p>}
          {fields && fields.map(({ children, ...rest }) => (
            <ObjectPropItem key={rest.name} isRequest={isRequest} {...rest}>
              {children}
            </ObjectPropItem>
          ))}

          {isRequest && returns && (
            <div>
              <h3 className="margin-vert--none margin-top--lg">
                Returns
              </h3>
              <hr className="margin-vert--md" style={{ borderWidth: 0.5 }} />
              <p className="text-muted">{returns}</p>
            </div>
          )}
        </div>
        <div className="col col--6">
          <StickyBox offsetTop={90} offsetBottom={90}>
            {snippets && (
              <TabbedCodeBlock
                groupId="all"
                name={snippets.map((x) => x.title).join('-')}
                items={snippets.map(({ title, value, language }) => ({
                  title,
                  language: language,
                  content: JSON.stringify(value, null, 2),
                }))} />
            )}
            {snippetsElement}
          </StickyBox>
        </div>
      </div>
    </div>
  );
}
