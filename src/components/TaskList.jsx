import { useContext } from 'react';
import { TaskContext } from "../Context/TaskContext";
import TaskCard from "./TaskCard";

function TaskList() {

  const { tasks } = useContext(TaskContext)

  if (tasks.length == 0) {
    return <h1 className="text-white text-4xl font-bold text-center">No hay tareas aun!</h1>;
  }

  return (
    <div className="grid grid-cols-3 gap-2 max-sm:grid-cols-1">
      {tasks.map((task) => (
        // Hay que ponerle la key al elemento que esta recorriendo
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
