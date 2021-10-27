import * as React from 'react';
import Clickable from './Clickable';
import { BsChevronRight } from 'react-icons/bs';

export default function SectionItemCard(props) {
  const {
    href,
    header,
    colSize = 4,
  } = props;

  return (
    <div className={`col col--${colSize} padding--sm`}>
      <Clickable href={href}>
        <div className="card padding--sm">
          <div className="row margin--none padding--sm items-center content-between">
            <h4 className="margin--none text-primary">{header}</h4>
            <BsChevronRight size={14} className="text-primary" />
          </div>
        </div>
      </Clickable>
    </div>
  );
}
