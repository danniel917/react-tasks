import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks"; // as para ponerle un alias

// Ejecutar function que retorna un object
// Nombre del Contexto
export const TaskContext = createContext();

// Crear Componente que renderiza
export function TaskContextProvider(props) {
  // UseState es una funcion que devuelve un arreglo
  // Un elemento y una funcion
  const [tasks, setTasks] = useState([]);
  
   // Se ejecuta cuando el componente cargue
   useEffect(() => {
    setTasks(data);
  }, []);

  function createTask(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  // Retornamos los valores
  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        deleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
