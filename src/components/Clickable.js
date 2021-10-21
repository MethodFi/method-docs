import * as React from 'react';
import { motion } from 'framer-motion';


export default function Clickable(props) {
  const { children, href } = props;
  const motionOpts = {
    whileHover: {
      x: -5,
      y: -5,
      transition: { ease: 'easeOut', duration: 0.1 },
      boxShadow: '2px 2px var(--ifm-color-primary)',
    },
  };

  return (
    <a href={href} className="transparent">
      <motion.div {...motionOpts} style={{ height: '100%', borderRadius: 4 }}>
        {children}
      </motion.div>
    </a>
  );
}
