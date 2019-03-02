import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import gql from "graphql-tag";
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { ReactDOM } from 'react-apollo';

import Pages from '.pages';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'http://localhost:4000/'
});

const client = new ApolloClient({
  cache,
  link
});



ReactDOM.render(
  <ApolloProvider client={client}>
    <Pages />
  </ApolloProvider>, document.getElementById('root'));
