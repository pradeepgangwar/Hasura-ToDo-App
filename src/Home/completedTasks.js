import React from 'react';
import { Query, graphql } from "react-apollo";
import gql from "graphql-tag";
import CompletedTask from './completedTask';

const CompletedTasks = () => (
  <Query
    query={completedTasksQuery}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return data.tasks.map((task) => (
        <ul>
          <CompletedTask task={task} />
        </ul>
      ));
    }}
  </Query>
);

export const completedTasksQuery = gql`
  query tasksQuery {
    tasks(
      where: { is_completed: {_eq: true}}
      order_by: task_id_desc
    ) {
      task_id
      task
      is_completed
    }
  }
`;

export default graphql(completedTasksQuery, {
  options: { pollInterval: 5000 },
})(CompletedTasks);
