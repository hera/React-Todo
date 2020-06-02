import React from 'react';
import './App.scss';

import TaskList from '../TaskList/TaskList';
import TaskForm from '../TaskForm/TaskForm';


class App extends React.Component {
    constructor (props) {
        super(props);

        this.addTaskHandler = this.addTaskHandler.bind(this);
        this.toggleCompletedHandler = this.toggleCompletedHandler.bind(this);
        this.removeAllTasksHandler = this.removeAllTasksHandler.bind(this);
        this.removeTaskHandler = this.removeTaskHandler.bind(this);
        
        this.state = {
            tasks: [
                {
                    title: 'Organize Garage',
                    id: 1528817077286,
                    completed: false
                },
                {
                    title: 'Bake Cookies',
                    id: 1528817084358,
                    completed: false
                }
            ]
        }

    }


    // Add one more task to the state
    
    addTaskHandler = event => {
        event.preventDefault();

        const titleElement = document.getElementById('taskTitle');


        this.setState(
            {
                tasks: [
                    ...this.state.tasks,
                    {
                        title: titleElement.value,
                        id: Date.now(),
                        completed: false
                    }
                ]
            }
        );

        titleElement.value = '';
    }


    // Mark a task as completed / incompleted

    toggleCompletedHandler = event => {

        const element = event.target;

        const updatedTasks = this.state.tasks.map(task => {
            if (task.id == element.dataset.id) {
                task.completed = !task.completed;
            }
            return task;
        });
        
        this.setState({tasks: updatedTasks});
    }


    // Clear all tasks in the state
    
    removeAllTasksHandler = event => {
        this.setState({tasks: []});
    }

    removeTaskHandler = event => {
        event.preventDefault();
        
        const updatedTasks = this.state.tasks.filter(task => {
            if (task.id != event.target.dataset.id) {
                return true
            }
        });

        this.setState({tasks: updatedTasks});
    }

    render () {
        return (
            <div className="container">
                <h1>Tasks</h1>

                <TaskList
                    tasks={this.state.tasks}
                    toggleCompletedHandler={this.toggleCompletedHandler}
                    removeTaskHandler={this.removeTaskHandler}
                />

                <TaskForm addTaskHandler={this.addTaskHandler} />

                <div>
                    <a href="#" className="clear-all" onClick={this.removeAllTasksHandler}>Clear All Tasks</a>
                </div>
            </div>
        );
    }
}

export default App;
