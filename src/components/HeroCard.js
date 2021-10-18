import * as React from 'react';
import { motion } from 'framer-motion';
import Clickable from "./Clickable";

export default function HeroCard(props) {
  const {
    header,
    body,
    href,
  } = props;

  return (
    <Clickable href={href}>
      <div className="card">
        <div className="card__header">
          <h2 className="margin-top--md margin-bottom--sm">{header}</h2>
          <p>{body}</p>
        </div>
      </div>
    </Clickable>
  );
}
