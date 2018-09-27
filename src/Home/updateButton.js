import React, { Component } from 'react';
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { pendingTasksQuery } from './pendingTasks'
import completedTasksQuery from './completedTasks'

const updateTaskMutation = gql`
  mutation updateTask($id: Int! ) {
    update_tasks(
      where: { task_id: {_eq: $id}},
      _set: { is_completed: true }
    ) {
      affected_rows
    }
  }
`;

class UpdateButton extends Component {

  updateButton = (id, updateTask) => {
    updateTask({ 
      variables: { id: id },
      refetchQueries: [ { query: pendingTasksQuery }, { query: completedTasksQuery }],
    })
    .then( res => {
        console.log("Done");
    });
  }

  render() {
    return (
      <Mutation mutation={updateTaskMutation}>
      { (updateTask, {loading, error}) => (
        <button onClick={() => this.updateButton(this.props.id, updateTask)}>Mark as done</button>
        )
      }
      </Mutation>
    )
  }
}

export default UpdateButton;