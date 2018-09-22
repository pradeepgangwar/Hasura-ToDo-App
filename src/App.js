import React, { Component } from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Tasks from './tasks';
import AddTask from './addTask';

const client = new ApolloClient({
  uri: "http://localhost:8080/v1alpha1/graphql"
});

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <h2>To Do App: Powered by Hasura and Apollo</h2>
    </div>
    <AddTask />
    <Tasks />
  </ApolloProvider>
);

export default App;
