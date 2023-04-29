import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import "./form.css";

export default function Form() {
  const [taskText, setTaskText] = useState("");
  const isTaskTextEmpty = taskText.length === 0;

  function handleCreateTask(event: FormEvent) {
    event.preventDefault();
    console.log(taskText);
  }

  function handleSetNewTaskText(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setTaskText(event.target.value);
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>): void {
    event.target.setCustomValidity("Você não pode criar uma tarefa sem descrição");
  }

  return (
    <>
      <form className='form'>
        <input
          type='text'
          placeholder='Adicione uma nova tarefa'
          value={taskText}
          onChange={handleSetNewTaskText}
          onInvalid={handleNewTaskInvalid}
          required
        />

        <button type='submit' onClick={handleCreateTask} disabled={isTaskTextEmpty}>
          <span>Criar</span>
          <i className='icon-plus'>+</i>
        </button>
      </form>
    </>
  );
}
