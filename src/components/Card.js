import * as React from 'react';
import Image from './Image';
import Clickable from './Clickable';

export default function Card(props) {
  const {
    header,
    body,
    href,
    illustration,
    icon,
    colSize = 4,
  } = props;

  return (
    <div className={`col col--${colSize} padding--sm`}>
      <Clickable href={href}>
        <div className="card">
          <div className="row row--no-gutters">
            {icon && (
              <div className="col col--1 margin-right--sm">
                <div className="card__header padding--none margin-top--lg margin-left--md">
                  <Image src={icon} alt={`${header} Illustration`} size={20} />
                </div>
              </div>
            )}
            <div className="col">
              <div className="card__header">
                {illustration && (
                  <Image src={illustration} alt={`${header} Illustration`} size={50} />
                )}
                <h4 className="margin-top--md margin-bottom--sm text-primary">
                  {header}
                </h4>
              </div>
              <p className="padding-horiz--md">{body}</p>
            </div>
          </div>
        </div>
      </Clickable>
    </div>
  );
}
