import * as React from 'react';

export default function CardContainer(props) {
  return (
    <div className="row margin-bottom--lg padding-horiz--sm">
      {props.children}
    </div>
  );
}
