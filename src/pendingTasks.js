import React from 'react';
import { Query, graphql } from "react-apollo";
import gql from "graphql-tag";
import PendingTask from './pendingTask';

const PendingTasks = () => (
  <Query
    query={pendingTasksQuery}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return data.tasks.map((task) => (
        <ul>
          <PendingTask task={task} />
        </ul>
      ));
    }}
  </Query>
);

export const pendingTasksQuery = gql`
  query tasksQuery {
    tasks(
      where: { is_completed: {_eq: false}}
      order_by: task_id_desc
    ) {
      task_id
      task
      is_completed
    }
  }
`;

export default graphql(pendingTasksQuery, {
  options: { pollInterval: 5000 },
})(PendingTasks);
