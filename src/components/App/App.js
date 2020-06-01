import React from 'react';
import './App.scss';

import TaskList from '../TaskList/TaskList';


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

    render() {
        return (
            <div className="container">
                <h1>Tasks</h1>
                <TaskList tasks={this.tasks} />
            </div>
        );
    }
}

export default App;
