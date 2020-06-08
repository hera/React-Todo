import React from 'react';
import './TaskList.scss';

import Task from '../Task/Task';

export default function TaskList (props) {
    const { tasks, dispatch } = props;

    return (
        <ul className="TaskList">
        {
            tasks && tasks.map(task => {
                return <Task task={task} key={task.id} dispatch={dispatch} />
            })
        }
        </ul>
    );
}