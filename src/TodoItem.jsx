import { GiSplitCross } from "react-icons/gi";

function TodoItem({ todo, onChange, onRemove, mode }) {
    return (
      <div className={`flex gap-2 ${mode === 0 ? '' : ( (mode === 1 && todo.done) || (mode === 2 && !todo.done) ) ? 'hidden' : ''}`}>        
        <input
          type="checkbox"
          id={todo.body}
          name={todo.body}
          checked={todo.done}
          onChange={() => onChange(todo.id)}
        />
        <label
          htmlFor={todo.body}
          className={todo.done ? "line-through" : ""}
        >
          {todo.body}
        </label>
        <button onClick={onRemove}>
          <GiSplitCross width={10} height={10} />
        </button>
      </div>
    );
  }

export default TodoItem;