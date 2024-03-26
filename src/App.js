import { useReducer, useEffect, useState } from "react";
import AddTask from "./components/elementos/AddTask.js";
import TaskList from "./components/elementos/TaskList.js";
import tasksReducer from "./TaskReducer.js";

export default function TaskApp() {
  // const storedElementos = JSON.parse(localStorage.getItem("elementos")) || [];

  const [elementos, dispatch] = useReducer(tasksReducer, initialState);

  useEffect(() => {
    // Almacena los elementos d comida en localStorage cada vez que cambien
    localStorage.setItem("elementos", JSON.stringify(elementos));
  }, [elementos]);

  function handleAddTask(nombre, comida, valorComida) {
    dispatch({
      type: "added",
      id: nextId++,
      nombre: nombre,
      comida: comida,
      valorComida: valorComida,
    });
  }

  function handleChangeTask(elementos) {
    dispatch({
      type: "changed",
      elementos: elementos,
    });
  }

  function handleDeleteTask(elementosId) {
    dispatch({
      type: "deleted",
      id: elementosId,
    });
  }

  return (
    <>
      <h1>Funcion; agregar, editar, eliminar con reducer</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        elementos={elementos}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}

let nextId = 0;
const initialState = JSON.parse(localStorage.getItem("elementos")) || [];
