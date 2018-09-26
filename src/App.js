import React from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import PendingTasks from './pendingTasks';
import CompletedTasks from './completedTasks';
import AddTask from './addTask';

const client = new ApolloClient({
  uri: "https://hasura-pradeep.herokuapp.com/v1alpha1/graphql"
});

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <h2>To Do App: Powered by Hasura and Apollo</h2>
      <hr/>
    </div>
    <div>
      <h3>Pending Tasks</h3>
    </div>
    <AddTask />
    <PendingTasks />
    <div>
      <h3>Tasks Completed </h3>
    </div>
    <CompletedTasks />
  </ApolloProvider>
);

export default App;
