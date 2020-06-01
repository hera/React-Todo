import React from 'react';
import './TaskList.scss';

import Task from '../Task/Task';


class TaskList extends React.Component {
    render () {
        const toggleCompletedHandler = this.props.toggleCompletedHandler;

        return (
            <ul className="TaskList">
                {
                    this.props.tasks.map(task => {
                        return <Task task={task} key={task.id} toggleCompletedHandler={toggleCompletedHandler} />
                    })
                }
            </ul>
        );
    }
}

export default TaskList;
