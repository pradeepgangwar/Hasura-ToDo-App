import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { pendingTasksQuery } from './pendingTasks'

const addTaskMutation = gql`
  mutation addTask($task: String! ) {
    insert_tasks(
      objects:[{
        task: $task
      }]
    ) {
      returning {
        task_id
        task
      }
    }
  }
`;

const AddTask = ({ mutate }) => {
  const handleKeyPress = (evt) => {
    if (evt.keyCode === 13) {
      evt.persist();
      mutate({ 
        variables: { task: evt.target.value },
        refetchQueries: [ { query: pendingTasksQuery }],
      })
      .then( res => {
        evt.target.value = '';  
      });
    }
  };

  return (
    <input
      type="text"
      placeholder="New Task"
      onKeyUp={handleKeyPress}
    />    
  );
};

const AddTaskWithMutation = graphql(
  addTaskMutation
)(AddTask);

export default AddTaskWithMutation;
