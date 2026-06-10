import React, { useState } from 'react';

export default function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const addTask = () => {
        if (inputValue.trim() !== '') {
            setTasks([...tasks, inputValue]);
            setInputValue('');
        }
    };

    const deleteTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '20px', fontFamily: 'sans-serif' }}>
            <div>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    style={{ padding: '5px', fontSize: '16px' }}
                />
                <button onClick={addTask} style={{ padding: '5px 10px', fontSize: '16px', marginLeft: '5px' }}>
                    Add List
                </button>
            </div>

            <h1>List of Items</h1>

            <ul style={{ listStyleType: 'none', padding: 0, fontSize: '20px' }}>
                {tasks.map((task, index) => (
                    <li key={index} style={{ margin: '10px 0' }}>
                        {task}
                        <button
                            onClick={() => deleteTask(index)}
                            style={{ marginLeft: '15px', color: 'red', cursor: 'pointer' }}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}