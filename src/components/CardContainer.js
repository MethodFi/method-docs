import * as React from 'react';

export default function CardContainer(props) {
  return (
    <div className="row margin-bottom--lg padding-horiz--sm">
      {props.children.map(child => (
        <div key={Math.random()} className="col col--4 padding--sm">
          {child}
        </div>
      ))}
    </div>
  );
}
