import * as React from 'react';
import { BsChevronRight } from 'react-icons/bs';
import Image from './Image';
import Clickable from './Clickable';

export default function LibraryPlatformCard(props) {
  const {
    href,
    logo,
    packageName,
  } = props;

  return (
    <div className="col col--6 padding--sm">
      <Clickable href={href}>
        <div className="card">
          <div className="row margin--none padding--sm items-center content-between">
            <div className="margin-left--sm row items-center">
              <Image src={logo} alt={`${packageName}-package`} size={30} />
              <code className="margin-left--sm padding-horiz--sm transparent"><span>{packageName}</span></code>
            </div>
            <BsChevronRight size={14} className="text-primary" />
          </div>
        </div>
      </Clickable>
    </div>
  );
}
