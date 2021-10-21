import * as React from 'react';

export default function Redirect(props) {
  const { to } = props;

  React.useEffect(() => {
    window.location.replace(to)
  }, []);

  return null;
}
