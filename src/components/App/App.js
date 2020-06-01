import React from 'react';
import './App.scss';

import TaskList from '../TaskList/TaskList';
import TaskForm from '../TaskForm/TaskForm';


class App extends React.Component {
    constructor (props) {
        super(props);
        
        this.tasks = [
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
        ];

    }
    
    addTaskHandler (event) {
        event.preventDefault();
        
    }

    render () {
        return (
            <div className="container">
                <h1>Tasks</h1>
                <TaskList tasks={this.tasks} />
                <TaskForm addTaskHandler={this.addTaskHandler} />
            </div>
        );
    }
}

export default App;
