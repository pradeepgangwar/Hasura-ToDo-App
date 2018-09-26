import React from 'react';
import UpdateButton from './updateButton';
import DeleteButton from './deleteButton';

const PendingTask = (props) => (
    <div key={props.task.task_id}>
        <span>{`${props.task.task}`} <UpdateButton id={props.task.task_id} /> <DeleteButton id={props.task.task_id} /> </span>
    </div>
);

export default PendingTask;