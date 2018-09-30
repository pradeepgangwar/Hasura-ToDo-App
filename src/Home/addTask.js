import React, {Component} from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { pendingTasksQuery } from './pendingTasks'

const addTaskMutation = gql`
  mutation addTask($task: String!, $user_id: String! ) {
    insert_tasks(
      objects:[{
        task: $task
        user_id: $user_id
      }]
    ) {
      returning {
        task_id
        task
      }
    }
  }
`;

const sub = localStorage.getItem('sub');

class AddTask extends Component {

  handleKeyPress = (evt, addTask) => {
    if (evt.keyCode === 13) {
      evt.persist();
      addTask({ 
        variables: { task: evt.target.value, user_id: sub },
        refetchQueries: [ { query: pendingTasksQuery }],
      })
      .then( res => {
        evt.target.value = '';  
      });
    }
  };

  render() {
    return (
      <Mutation mutation={addTaskMutation}>
      { (addTask , {loading, error}) => (
          <input
            type="text"
            placeholder="New Task"
            onKeyUp={(evt) => this.handleKeyPress(evt, addTask)}
          />
        )
      }
      </Mutation>    
    );
  }

}

// const AddTask = ({ mutate }) => {
//   const handleKeyPress = (evt) => {
//     if (evt.keyCode === 13) {
//       evt.persist();
//       mutate({ 
//         variables: { task: evt.target.value },
//         refetchQueries: [ { query: pendingTasksQuery }],
//       })
//       .then( res => {
//         evt.target.value = '';  
//       });
//     }
//   };

//   return (
//     <input
//       type="text"
//       placeholder="New Task"
//       onKeyUp={handleKeyPress}
//     />    
//   );
// };

// const AddTaskWithMutation = graphql(
//   addTaskMutation
// )(AddTask);

export default AddTask;
