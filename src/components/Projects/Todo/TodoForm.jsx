import { useState } from "react";
export function TodoForm({ onAddTodo }) {
  const [inputValue, setInputValue] = useState({});

  const handlerOnChange = (value) => {
    setInputValue({ id: value, content: value, checked: false });
  };

  const handlerSubmitForm = (event) => {
    event.preventDefault();
    onAddTodo(inputValue);
    setInputValue({ id: "", content: "", checked: false });
  };
  return (
    <>
      <section className="form">
        <form onSubmit={handlerSubmitForm}>
          <div>
            <input
              type="text"
              className="todo-input"
              autoComplete="off"
              value={inputValue.content}
              onChange={(event) => handlerOnChange(event.target.value)}
            />
          </div>
          <div>
            <button type="submit" className="todo-btn">
              Add Task
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
