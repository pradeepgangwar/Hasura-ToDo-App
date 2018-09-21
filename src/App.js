import React, { Component } from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Tasks from './tasks';

const client = new ApolloClient({
  uri: "http://localhost:8080/v1alpha1/graphql"
});

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <h2>My first Apollo app</h2>
    </div>
    <Tasks />
  </ApolloProvider>
);

export default App;
