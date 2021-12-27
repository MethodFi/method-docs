import * as React from 'react';

export default function ResourceErrorsSection(props) {
  const { description, errors } = props;
  const { column1, column2 } = errors.reduce((acc, val, idx) => {
    const isEven = idx % 2 === 0;
    if (isEven) acc.column1.push(val);
    else acc.column2.push(val);

    return acc;
  }, { column1: [], column2: [] });

  return (
    <div className="container padding--none">
      <div className="row">
        <div className="col col--4 margin-bottom--sm">
          <span>{description}</span>
        </div>
        <div className="col col--4">
          <ul>
            {column1.map((error) => (
              <li key={error.name}>
                <a href={error.href}>
                  <code className="transparent">{error.name}</code>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="col col--4">
          <ul>
            {column2.map((error) => (
              <li key={error.name}>
                <a href={error.href}>
                  <code className="transparent">{error.name}</code>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <hr />
    </div>
  );
}
