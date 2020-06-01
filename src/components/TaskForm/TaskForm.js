import React from 'react';
import './TaskForm.scss';

class TaskForm extends React.Component {
    render () {
        const { addTaskHandler } = this.props;

        return (
            <form className="TaskForm" onSubmit={addTaskHandler}>
                <input type="text" id="taskTitle" placeholder="Add Task..." />
                <input type="submit" id="taskSubmit" value="Add" />
            </form>
        );
    }
}

export default TaskForm;