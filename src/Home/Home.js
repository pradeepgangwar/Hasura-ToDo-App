import React, { Component } from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import PendingTasks from './pendingTasks';
import CompletedTasks from './completedTasks';
import AddTask from './addTask';

const client = new ApolloClient({
  uri: "https://hasura-pradeep.herokuapp.com/v1alpha1/graphql"
});

class Home extends Component {
  login() {
    this.props.auth.login();
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div className="container">
        {
          isAuthenticated() && (
              <div>
                <h4>
                  You are logged in!
                </h4>
                <ApolloProvider client={client}>
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
              </div>
            )
        }
        {
          !isAuthenticated() && (
              <h4>
                You are not logged in! Please{' '}
                <a
                  style={{ cursor: 'pointer' }}
                  onClick={this.login.bind(this)}
                >
                  Log In
                </a>
                {' '}to continue.
              </h4>
            )
        }
      </div>
    );
  }
}

export default Home;
