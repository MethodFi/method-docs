import * as React from 'react';
import { motion } from 'framer-motion';


export default function Clickable(props) {
  const { children, href } = props;
  const motionOpts = {
    whileHover: {
      x: -5,
      y: -5,
      transition: { ease: 'easeOut', duration: 0.2 },
      boxShadow: '3px 3px var(--ifm-color-primary)',
    },
  };

  return (
    <a href={href} className="transparent clickable">
      <motion.div {...motionOpts}>
        {children}
      </motion.div>
    </a>
  );
}
