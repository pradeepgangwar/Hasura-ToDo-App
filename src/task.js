import React from 'react';

const Task = (props) => (
    <div key={props.task.task_id}>
        <p>{`${props.task.task}`}</p>
    </div>
);

export default Task;