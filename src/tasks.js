import React, { Component } from 'react';
import { Query, graphql } from "react-apollo";
import gql from "graphql-tag";
import Task from './task';

const Tasks = () => (
  <Query
    query={tasksQuery}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return data.tasks.map((task) => (
        <ul>
          <Task task={task} />
        </ul>
      ));
    }}
  </Query>
);

export const tasksQuery = gql`
  query tasksQuery {
    tasks {
      task_id
      task
      is_completed
    }
  }
`;

export default graphql(tasksQuery, {
  options: { pollInterval: 5000 },
})(Tasks);
