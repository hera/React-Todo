import React from 'react';
import './TaskList.scss';

import Task from '../Task/Task';


class TaskList extends React.Component {
    render () {
        const {tasks, toggleCompletedHandler, removeTaskHandler} = this.props;

        return (
            <ul className="TaskList">
                {
                    tasks.map(task => {
                        return <Task task={task} key={task.id} toggleCompletedHandler={toggleCompletedHandler} removeTaskHandler={removeTaskHandler} />
                    })
                }
            </ul>
        );
    }
}

export default TaskList;
