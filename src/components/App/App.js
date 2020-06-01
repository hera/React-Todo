import React from 'react';
import './App.scss';

import TaskList from '../TaskList/TaskList';
import TaskForm from '../TaskForm/TaskForm';


class App extends React.Component {
    constructor (props) {
        super(props);
        this.addTaskHandler = this.addTaskHandler.bind(this);
        
        this.state = {
            tasks: [
                {
                    title: 'Organize Garage',
                    id: 1528817077286,
                    completed: true
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

    render () {
        return (
            <div className="container">
                <h1>Tasks</h1>
                <TaskList tasks={this.state.tasks} />
                <TaskForm addTaskHandler={this.addTaskHandler} />
            </div>
        );
    }
}

export default App;
