import React, { Component } from 'react';
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import pendingTasksQuery from './pendingTasks'
import completedTasksQuery from './completedTasks'

const deleteTaskMutation = gql`
  mutation deleteTask($id: Int! ) {
    delete_tasks(
      where: { task_id: {_eq: $id}},
    ) {
      affected_rows
    }
  }
`;

class DeleteButton extends Component {

  deleteButton = (id, deleteTask) => {
    deleteTask({ 
      variables: { id: id },
      refetchQueries: [ { query: pendingTasksQuery }, { query: completedTasksQuery }],
    })
    .then( res => {
        console.log("Done");
    });
  }

  render() {
    return (
      <Mutation mutation={deleteTaskMutation}>
      { (deleteTask, {loading, error}) => (
        <button onClick={() => this.deleteButton(this.props.id, deleteTask)}>Delete</button>
        )
      }
      </Mutation>
    )
  }
}

export default DeleteButton;