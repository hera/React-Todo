import React from 'react';
import './Task.scss';

class Task extends React.Component {
    render () {
        const { title, id, completed } = this.props.task;

        return (
            <li className={ completed ? 'Task Task--completed' : 'Task'}>
                <span className="Task__title">{ title }</span>
            </li>
        );
    }
}

export default Task;