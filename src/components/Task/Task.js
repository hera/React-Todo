import React from 'react';
import './Task.scss';

class Task extends React.Component {
    render () {
        const { title, id, completed } = this.props.task;
        const {toggleCompletedHandler, removeTaskHandler} = this.props;

        return (
            <li className={ completed ? 'Task Task--completed' : 'Task'}>
                <span className="Task__title">{ title }</span>
                <div className="Task__controls">
                    <a href="#" data-id={id} onClick={removeTaskHandler} className="Task__remove">Remove</a>
                    <input type="checkbox" className="Task__checkbox" data-id={id} onChange={toggleCompletedHandler} checked={completed} />
                </div>
            </li>
        );
    }
}

export default Task;