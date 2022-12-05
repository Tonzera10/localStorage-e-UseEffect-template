import React, { useState } from "react";
import { Form } from "./style";

export default function FormLocal() {
  const [nome, setNome] = useState("");
  const [tarefa, setTarefa] = useState("");
  const [listaTarefa, setListaTarefa] = useState([]);

  const onChangeNome = (e) => {
    setNome(e.target.value);
  };

  const guardarNome = () => {
    localStorage.setItem("nome", nome);
  };

  const pegarNome = () => {
    alert(localStorage.getItem("nome"));
  };

  const onChangeTarefa = (e) => {
    setTarefa(e.target.value);
  };

  const adicionarTarefa = () => {
    setListaTarefa([...listaTarefa, tarefa]);
    setTarefa("");
  };

  const guardarTarefa = () => {
    const tarefaEmString = JSON.stringify(listaTarefa);
    localStorage.setItem("tarefaChave", tarefaEmString);
  };

  const pegarTarefa = () => {
    const tarefaPega = localStorage.getItem("tarefaChave");
    const tarefaConvertida = JSON.parse(tarefaPega);
    setListaTarefa(tarefaConvertida);
  };

  return (
    <Form>
      <h3>Prática 1</h3>
      <label htmlFor="nome">
        nome:
        <input name="nome" id="nome" onChange={onChangeNome} />
      </label>
      <div>
        <button onClick={guardarNome}>Guardar Dados</button>
        <button onClick={pegarNome}>Acessar Dados</button>
      </div>
      <br />
      <h3>Prática 2</h3>
      <label htmlFor="tarefa">
        tarefa:
        <input
          name="tarefa"
          id="tarefa"
          value={tarefa}
          onChange={onChangeTarefa}
        />
      </label>
      <button type="button" onClick={adicionarTarefa}>
        adicionar Tarefa
      </button>
      <ul>
        {listaTarefa.map((task) => {
          return <li key={task}>{task}</li>;
        })}
      </ul>
      <div>
        <button onClick={guardarTarefa}>Guardar tarefa</button>
        <button onClick={pegarTarefa}>Acessar tarefa</button>
      </div>
    </Form>
  );
}
