import React from 'react';
import DeleteButton from './deleteButton';

const CompletedTask = (props) => (
    <div key={props.task.task_id}>
        <span>{`${props.task.task}`} <DeleteButton id={props.task.task_id} /> </span>
    </div>
);

export default CompletedTask;