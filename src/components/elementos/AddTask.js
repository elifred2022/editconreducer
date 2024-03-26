import { useState } from "react";

export default function AddTask({ onAddTask }) {
  const [nombre, setNombre] = useState("");
  const [comida, setComida] = useState("");
  const [valorComida, setValorComida] = useState("");
  return (
    <>
      <input
        placeholder="Agregar nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        placeholder="Agregar comida"
        value={comida}
        onChange={(e) => setComida(e.target.value)}
      />
      <input
        placeholder="Agregar comida"
        value={valorComida}
        onChange={(e) => setValorComida(e.target.value)}
      />
      <button
        onClick={() => {
          setNombre("");
          setComida("");
          setValorComida("");
          onAddTask(nombre, comida, valorComida);
        }}
      >
        Agregar
      </button>
    </>
  );
}
