import React from 'react';
import './App.scss';

import TaskList from '../TaskList/TaskList';
import TaskForm from '../TaskForm/TaskForm';


class App extends React.Component {
    constructor (props) {
        super(props);

        this.addTaskHandler = this.addTaskHandler.bind(this);
        this.toggleCompletedHandler = this.toggleCompletedHandler.bind(this);
        
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

    toggleCompletedHandler = event => {

        const checkbox = event.target;

        const updatedTasks = this.state.tasks.map(task => {
            if (task.id == checkbox.dataset.id) {
                task.completed = !task.completed;
            }
            return task;
        });
        
        this.setState(updatedTasks);
    }

    render () {
        return (
            <div className="container">
                <h1>Tasks</h1>
                <TaskList tasks={this.state.tasks} toggleCompletedHandler={this.toggleCompletedHandler} />
                <TaskForm addTaskHandler={this.addTaskHandler} />
            </div>
        );
    }
}

export default App;
