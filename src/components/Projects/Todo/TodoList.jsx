import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
export function TodoList({ checked,data, onHandleDeleteTodo,onHandleCheckedTodo }) {
  return (
    <>
      <li className="todo-item">
        <span className={checked?"checkList":"notCheckList"}>{data}</span>
        <button className="check-btn" onClick={()=>onHandleCheckedTodo(data)} >
          <IoCheckmarkDoneSharp />
        </button>
        <button className="delete-btn" onClick={() => onHandleDeleteTodo(data)}>
          <MdDelete />
        </button>
      </li>
    </>
  );
}
