import React from 'react';

const Task = (props) => (
    <div key={props.task.task_id}>
        <p>{`${props.task.task} :Completed?: ${props.task.is_completed}`}</p>
    </div>
);

export default Task;