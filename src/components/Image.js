import * as React from 'react';


export default function Image(props) {
  const {
    src,
    alt,
    size,
  } = props;

  return (
    <img
      src={src}
      alt={alt}
      height={size}
      width={size}
      style={{ minHeight: size, minWidth: size }} />
  );
}
