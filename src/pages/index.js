import React from 'react';
import Helmet from 'react-helmet';

import Layout from '../components/Layout';

const IndexPage = () =>
  <Layout>
    <Helmet title="Welcome to Gatsby" />
    Hello World
  </Layout>
;

export default IndexPage;