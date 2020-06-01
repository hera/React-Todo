import React from 'react';
import './App.scss';

import Task from '../Task/Task';


class App extends React.Component {


    render() {
        return (
            <div className="container">
                <h1>Tasks</h1>
                <ul className="task-list">
                    <Task />
                </ul>
            </div>
        );
    }
}

export default App;
