import React from 'react';
import Layout from '@theme/Layout';
import HomePageHeader from "../components/HomePageHeader";
import HomePageBody from "../components/HomePageBody";
import Redirect from '../components/Redirect';

export default function Home() {
  return <Redirect to="/api" />
}

// <Layout>
//   <HomePageHeader />
//   <HomePageBody />
// </Layout>
