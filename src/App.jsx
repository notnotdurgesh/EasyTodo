import { useState } from "react";
import TodoItem from "./TodoItem";

export default function App() {

  const [todos, setTodos] = useState([
    { body: "Learn React Fundamentals", done: true },
    { body: "Build a TODOs App", done: false },
    { body: "Build a Game", done: false },
  ]);
  const [newTodo, setNewTodo] = useState("")
  const [mode, setMode] = useState(0)

  
  const handleTodoChange = (idx) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo, i) => (i === idx ? { ...todo, done: !todo.done } : todo))
    );
  };

  const handleTodoRemove = (idx) => {
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== idx));
  };

  const addTodo = () => {
    setTodos((prev) => [...prev, {body: newTodo, done: false}])
    console.log("new Todo", todos)
    setNewTodo(" ")
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="p-4 bg-gray-500 text-white rounded-md ">
        <h1 className="font-bold text-xl">TODO List</h1>
        <div className="ml-4">
          {todos.map((todo, idx) => (
            <TodoItem
              mode={mode}
              key={idx} 
              todo={todo} 
              onChange={handleTodoChange.bind(null, idx)} 
              onRemove={handleTodoRemove.bind(null, idx)} 
            />
          ))}
        </div>

        <div className="flex gap-2 mt-2">
          <input className = "text-black p-1" type="text" placeholder="What TODO?" value = {newTodo} onChange={(e) => {
            setNewTodo(e.target.value); 
            console.log(newTodo)
            }}/>
          <button className="bg-gray-400 p-1 border-black" onClick = {addTodo}> Add Todo </button>
        </div>
        
        <div className="flex gap-2 my-2 items-center">
            Show: 
            <button className={`my-2  p-1 border-black ${mode === 0 ? 'font-bold bg-gray-400' : ''}`} onClick={() => setMode(0)} >All </button>
            <button className={`my-2  p-1 border-black ${mode === 1 ? 'font-bold bg-gray-400' : ''}`} onClick={() => setMode(1)}>Active</button>
            <button className={`my-2  p-1 border-black ${mode === 2 ? 'font-bold bg-gray-400' : ''}`} onClick={() => setMode(2)}>Completed </button>
        </div>

        <button className="my-2 bg-gray-400 p-1 border-black" onClick={() => {setTodos(prev => [])}}>
            Delete All Todo's
        </button>
        
        <div>
          Todo's Left: {todos.length}
        </div>
      </div>
    </div>
  );
}

