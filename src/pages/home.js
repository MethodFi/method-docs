import React from 'react';
import Layout from '@theme/Layout';
import HomePageHeader from "../components/HomePageHeader";
import HomePageBody from "../components/HomePageBody";

export default function Home() {
  return (
    <Layout>
      <HomePageHeader />
      <HomePageBody />
    </Layout>
  );
}
