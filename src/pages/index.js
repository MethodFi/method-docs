import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import CardContainer from '../components/CardContainer';
import HeroCard from '../components/HeroCard';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className="hero">
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <CardContainer>
          <HeroCard
            href="#"
            header="Core concepts"
            body="Learn the core concepts of Moov so you can really hit the ground running."
          />
          <HeroCard
            href="#"
            header="Core concepts"
            body="Learn the core concepts of Moov so you can really hit the ground running."
          />
          <HeroCard
            href="#"
            header="Core concepts"
            body="Learn the core concepts of Moov so you can really hit the ground running."
          />
        </CardContainer>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout>
      <HomepageHeader />
    </Layout>
  );
}
