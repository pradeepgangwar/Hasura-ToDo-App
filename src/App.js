import React, { Component } from 'react';

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
      <div>
        <h2>To Do App: Powered by Hasura and Apollo <span>
        {
          !isAuthenticated() && (
              <button
                onClick={this.login.bind(this)}
              >
                Log In
              </button>
            )
        }
        {
          isAuthenticated() && (
              <button
                onClick={this.logout.bind(this)}
              >
                Log Out
              </button>
            )
        }
        </span></h2>
        <hr/>
      </div>
    )
  }
}

export default App;

