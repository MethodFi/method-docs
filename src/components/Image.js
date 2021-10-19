import * as React from 'react';


export default function Image(props) {
  const {
    src,
    alt,
    size,
    height,
    width,
  } = props;

  return (
    <img
      src={src}
      alt={alt}
      height={height || size}
      width={width || size}
      style={{ minHeight: height || size, minWidth: height || size }} />
  );
}
