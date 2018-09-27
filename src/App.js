import React, { Component } from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import PendingTasks from './pendingTasks';
import CompletedTasks from './completedTasks';
import AddTask from './addTask';
import Auth from './Auth/Auth.js';

const client = new ApolloClient({
  uri: "https://hasura-pradeep.herokuapp.com/v1alpha1/graphql"
});

class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <ApolloProvider client={client}>
        <div>
          <h2>To Do App: Powered by Hasura and Apollo <span>
          {
            !isAuthenticated() && (
                <button
                  bsStyle="primary"
                  className="btn-margin"
                  onClick={this.login.bind(this)}
                >
                  Log In
                </button>
              )
          }
          {
            isAuthenticated() && (
                <button
                  bsStyle="primary"
                  className="btn-margin"
                  onClick={this.logout.bind(this)}
                >
                  Log Out
                </button>
              )
          }
          </span></h2>
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
    )
  }
}

const auth = new Auth();
auth.login();

export default App;
