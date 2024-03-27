import { useState } from "react";

export default function TaskList({ elementos, onChangeTask, onDeleteTask }) {
  return (
    <ul>
      {elementos.map((task, index) => (
        <li key={task.id}>
          <span>{index + 1} </span>
          <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
        </li>
      ))}
    </ul>
  );
}

function Task({ task, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.nombre}
          onChange={(e) => {
            onChange({
              ...task,
              nombre: e.target.value,
            });
          }}
        />
        <input
          value={task.comida}
          onChange={(e) => {
            onChange({
              ...task,
              comida: e.target.value,
            });
          }}
        />
        <input
          value={task.valorComida}
          onChange={(e) => {
            onChange({
              ...task,
              valorComida: e.target.value,
            });
          }}
        />
        <button onClick={() => setIsEditing(false)}>Guardar</button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.nombre}
        {task.comida}
        {task.valorComida}
        <button onClick={() => setIsEditing(true)}>Editar</button>
      </>
    );
  }
  return (
    <label>
      {taskContent}
      <button onClick={() => onDelete(task.id)}>Borrar</button>
    </label>
  );
}
