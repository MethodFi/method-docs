import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import CardContainer from '../components/CardContainer';
import HeroCard from '../components/HeroCard';

export default function HomePageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className="hero padding-bottom--none padding-horiz--none">
      <div className="container">
        <div className="margin-vert--lg padding-vert--lg">
          <h1 className="hero__title text--center margin--none">{siteConfig.title}</h1>
          <p className="hero__subtitle text--center">{siteConfig.tagline}</p>
        </div>
        <CardContainer>
          <HeroCard
            colSize={5}
            href="/docs/guides"
            header="Guides"
            body="Learn the core concepts of Method so you can really hit the ground running."
          />
          <HeroCard
            colSize={4}
            href="/docs/api"
            header="API Reference"
            body="Learn the core concepts of Method so you can really hit the ground running."
          />
          <HeroCard
            colSize={3}
            href="/docs/sdks"
            header="SDKs"
            body="Learn the core concepts of Method so you can really hit the ground running."
          />
        </CardContainer>
      </div>
    </header>
  );
}

