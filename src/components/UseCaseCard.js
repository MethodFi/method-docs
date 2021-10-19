import * as React from 'react';
import Clickable from './Clickable';

export default function UseCaseCard(props) {
  const {
    header,
    body,
    href,
    illustration,
    colSize = 4,
  } = props;

  return (
    <div className={`col col--${colSize} padding--sm`}>
      <Clickable href={href}>
        <div className="card avatar">
          <div className="card__image padding-top--md padding-horiz--md">
            <img src={illustration} alt={`${header} Illustration`} style={{ borderRadius: 4 }} />
          </div>
          <div className="card__header">
            <h4 className="margin-bottom--sm">{header}</h4>
            <p>{body}</p>
          </div>
        </div>
      </Clickable>
    </div>
  );
}
