import React, { Component } from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Task from './task';

const Tasks = () => (
  <Query
    query={gql`
      {
        tasks {
          task_id
          task
          is_completed
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return data.tasks.map((task) => (
        <Task task={task} />
      ));
    }}
  </Query>
);

export default Tasks;
