import React, { useState } from 'react';

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && newTask) {
            setTasks([...tasks, newTask]);
            setNewTask('');
        }
    };

    const removeTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    return (
        <div className="todo-list-container">
            <h3>Todo List</h3>
            <input 
                className="todo-input"
                type="text" 
                value={newTask} 
                onChange={(e) => setNewTask(e.target.value)} 
                onKeyPress={handleKeyPress}
                placeholder="Add a new task and press Enter" 
            />
            <ul>
                {tasks.map((task, index) => (
                    <li key={index} className="todo-item" onClick={() => removeTask(index)}>
                        <span className="todo-text">{task}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
