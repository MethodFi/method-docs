import * as React from 'react';
import {
  BsArrowRight,
} from 'react-icons/bs';
import Clickable from "./Clickable";

export default function HeroCard(props) {
  const {
    header,
    body,
    href,
    colSize = 4,
  } = props;

  return (
    <div className={`col col--${colSize} padding--sm`}>
      <Clickable href={href}>
        <div className="card">
          <div className="card__header">
            <h2 className="margin-top--md margin-bottom--sm">
              {header}
            </h2>
            <p>{body}</p>
            <BsArrowRight size={24} />
          </div>
        </div>
      </Clickable>
    </div>
  );
}
