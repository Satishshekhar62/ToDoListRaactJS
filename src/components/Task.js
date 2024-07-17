import react from 'react';

function Task({ task, editTask, deleteTask, toggleComplete })
{
    return (
        <div className={`task ${task.completed ? 'completed' : ''}`}>
            <span onClick={ ()=> toggleComplete(task.id) }>{task.text}</span>
            <button onClick={() => editTask(task.id)}>Edit</button>
            <button onClick={ ()=> deleteTask(task.id)}>Delete</button>
        </div>
    );
}

export default Task;