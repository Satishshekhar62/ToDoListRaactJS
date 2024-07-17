
import React, { useState } from 'react';

function TaskForm({ addTask }){

    const [taskText, setTaskText] = useState('');

    function handleSubmit(e){
        e.preventDefault();

        if(taskText.trim()){
            addTask({id : Date.now(), text: taskText, completed: false});
            setTaskText('');
        }
    }


    return(
        <form onSubmit={handleSubmit}>

            <input type='text' 
            placeholder='Add a task' 
            value={taskText} 
            onChange={(e) => setTaskText(e.target.value)} 


            />

                <button type="submit">Add Task</button>

        </form>
    );
}


export default TaskForm;