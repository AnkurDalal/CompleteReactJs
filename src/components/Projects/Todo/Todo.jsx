import { useState } from "react";

import "./Todo.css";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";

const todoKey = "reactTodo";
export function Todo() {
  const [task, setTask] = useState(() => {
    const rawTodo = localStorage.getItem(todoKey);
    if (!rawTodo) {
      return [];
    } else {
      return JSON.parse(rawTodo);
    }
  });

  const handlerSubmitForm = (inputValue) => {
    const { id, content, checked } = inputValue;
    if (!content) {
      return;
    }

    {
      /*if (task.includes(inputValue)) {
      return;
    }*/
    }
    const ifTodoContentMatched = task.find(
      (currTask) => currTask.content === content
    );
    if (ifTodoContentMatched) return;

    setTask((prevTask) => [
      ...prevTask,
      { id: id, content: content, checked: checked },
    ]);
  };

  //add task to the local storage
  localStorage.setItem(todoKey, JSON.stringify(task));

  //handle delete task function

  const handleDeleteTask = (value) => {
    const updatedTask = task.filter((currTask) => currTask.content !== value);
    setTask(updatedTask);
  };

  //handle clear all task
  const handleClearAllTask = () => {
    setTask([]);
  };

  //todo handle checked function

  const handleCheckedTodo = (content) => {
    const updatedTask = task.map((curTask) => {
      if (curTask.content === content) {
        return { ...curTask, checked: !curTask.checked };
      } else {
        return curTask;
      }
    });
    setTask(updatedTask);
  };
  return (
    <>
      <section className="todo-container">
        <header>
          <h1>Todo List</h1>
          <TodoDate />
        </header>

        <TodoForm onAddTodo={handlerSubmitForm} />

        <section className="myUnOrdList">
          <ul>
            {task.map((currTask) => (
              <TodoList
                key={currTask.id}
                data={currTask.content}
                checked={currTask.checked}
                onHandleDeleteTodo={handleDeleteTask}
                onHandleCheckedTodo={handleCheckedTodo}
              />
            ))}
          </ul>
        </section>
        <section>
          <button className="clear-btn" onClick={handleClearAllTask}>
            Clear all
          </button>
        </section>
      </section>
    </>
  );
}
