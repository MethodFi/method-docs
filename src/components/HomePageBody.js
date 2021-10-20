import React from 'react';
import CardContainer from './CardContainer';
import UseCaseCard from './UseCaseCard';


export default function HomePageBody() {
  return (
    <div className="container padding-vert--lg">
      <h1>Use cases</h1>
      <CardContainer>
        <UseCaseCard
          href="/docs/guides"
          illustration="/static/img/illustration-4.png"
          header="Guides"
          body="Learn the core concepts of Method so you can really hit the ground running."
        />
        <UseCaseCard
          href="/docs/api"
          illustration="/static/img/illustration-2.png"
          header="API Reference"
          body="Learn the core concepts of Method so you can really hit the ground running."
        />
        <UseCaseCard
          href="/docs/libraries"
          illustration="/static/img/illustration-3.png"
          header="Libraries"
          body="Learn the core concepts of Method so you can really hit the ground running."
        />
      </CardContainer>
    </div>
  );
}
