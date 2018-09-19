import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled, { ThemeProvider } from 'styled-components'

import Header from './Header'
import {
  ThemeSelectContext,
  ThemeSelectProvider
} from '../contexts/ThemeSelectContext'

import { GlobalStyle, themes } from '../theme/globalStyle'
import { media } from '../theme/globalStyle'

const AppStyles = styled.div`
  background-color: ${({ theme }) => theme.background};
  background-image: url("${props => props.background}");
  background-attachment: fixed;
  /*space between first post and nav bar*/
  /* padding-top: 2.7rem; */
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    'h h h h h h h h h h h h'
    '. . . m m m m m m . . .'
    'f f f f f f f f f f f f';
  ${media.giant`
    grid-template-areas:
      'h h h h h h h h h h h h'
      '. . m m m m m m m m . .'
      'f f f f f f f f f f f f';
    /* background: goldenrod; */
  `};
  ${media.desktop`
    grid-template-areas:
      'h h h h h h h h h h h h'
      '. m m m m m m m m m m .'
      'f f f f f f f f f f f f';
    /* background: dodgerblue; */
  `};
  ${media.tablet`
    grid-template-columns: repeat(9, 1fr);
    grid-template-areas:
      'h h h h h h h h h'
      '. m m m m m m m .'
      'f f f f f f f f f';
    /* background: mediumseagreen; */
  `};
  ${media.phone`
    grid-template-columns: repeat(9, 1fr);
    grid-template-areas:
      'h h h h h h h h h'
      'm m m m m m m m m'
      'f f f f f f f f f';
    /* background: palevioletred; */
  `};
`

const Wrapper = styled.div`
  grid-area: m;
`

const Layout = ({ children }) => (
  <ThemeSelectProvider>
    <ThemeSelectContext.Consumer>
      {({ theme }) => (
        <ThemeProvider theme={themes.theme1}>
          <AppStyles>
            <GlobalStyle />
            <Helmet
              title={'data.site.siteMetadata.title'}
              meta={[
                { name: 'description', content: 'Sample' },
                { name: 'keywords', content: 'sample, something' }
              ]}>
              <html lang="en-GB" />
            </Helmet>
            <Header siteTitle={'data.site.siteMetadata.title'} />
            <Wrapper>{children}</Wrapper>
          </AppStyles>
        </ThemeProvider>
      )}
    </ThemeSelectContext.Consumer>
  </ThemeSelectProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
