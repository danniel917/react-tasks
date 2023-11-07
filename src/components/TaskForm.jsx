import { useContext, useState } from "react";
import { TaskContext } from "../Context/TaskContext";

function TaskForm() {
  const { createTask } = useContext(TaskContext);

  //Primer parametro es la constante
  // Segundo parametro es la funcion a ejecutar
  // Y el parametro del useState es el valor por default
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
        <input
          type="text"
          placeholder="Escribe tu Tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="bg-slate-300 p-3 w-full mb-2"
          autoFocus
        />
        <textarea
          placeholder="Descripcion"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="bg-slate-300 p-3 w-full mb-2"
        ></textarea>
        <button className="bg-indigo-500 p-3 text-white rounded-md w-full">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
