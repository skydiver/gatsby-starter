import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { createGlobalStyle } from 'styled-components';

import '../../.semantic/dist/semantic.min.css';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: #FFF;
  }
`;

const MainLayout = ({ children }) =>
  <React.Fragment>
    <GlobalStyle />
    <Helmet>
      <html lang="en" />
      <meta name="description" content="site description" />
    </Helmet>
    {children}
  </React.Fragment>
;

MainLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default MainLayout;