import react from 'react';
import Task from './Task';

function TaskList({ tasks, editTask, deleteTask, toggleComplete })
{
    return (
        <div className="task-list">
        {tasks.map(task => (
          <Task
            key={task.id}
            task={task}
            editTask={editTask}
            deleteTask={deleteTask}
            toggleComplete={toggleComplete}
          />
        ))}
      </div>
    );
}

export default TaskList;