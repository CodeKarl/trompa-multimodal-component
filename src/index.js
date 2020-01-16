import React, { Component } from 'react';
import { I18nextProvider } from 'react-i18next';
import * as PropTypes from 'prop-types';
import { MuiThemeProvider } from '@material-ui/core';
import { ApolloProvider } from 'react-apollo';
import SearchProvider from './containers/SearchProvider';
import { Search } from './containers/Search';
import theme from './theme';
import i18n from './i18n';
import { getApolloClient } from './client';
import NavBar from './containers/NavBar';

export class MultiModalComponent extends Component {
  static propTypes = {
    uri: PropTypes.string,
  };

  static defaultProps = {
    uri: 'https://api-test.trompamusic.eu',
  };

  constructor(props) {
    super(props);

    this.client = getApolloClient(this.props.uri);
  }

  render() {
    return (
      <ApolloProvider client={this.client}>
        <MuiThemeProvider theme={theme}>
          <I18nextProvider i18n={i18n}>
            <SearchProvider client={this.client}>
              <NavBar />
              <Search />
            </SearchProvider>
          </I18nextProvider>
        </MuiThemeProvider>
      </ApolloProvider>
    );
  }
}
