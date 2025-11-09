import { useEffect, useState } from "react";
import { formatDate } from "../js/utils";
import TodoItem from "./TodoItem";

export default function TodoList(){
   const [todos, setTodos] = useState(() =>{
      const saved = localStorage.getItem('todos');
      return saved ? JSON.parse(saved) : [];
   });

   const [text, setText] = useState('');

   useEffect(()=>{
      localStorage.setItem('todos', JSON.stringify(todos));
   }, [todos]);


   const addTodo = () =>{
      if(!text.trim()) return;

      setTodos([...todos, {text, done: false, date: formatDate(Date.now())}]);
      setText('');
   }

   const toggleTodo = (index) =>{
      const newTodos = [...todos];
      newTodos[index].done = !newTodos[index].done;
      setTodos(newTodos);
   }

   const deleteTodo = (index)=>{
      setTodos(todos.filter((_, i) => i !== index));
   }


   return (
      <div className="todo-container">
         <h1>Todo List</h1>

         <div className="todo-input">
            <input
            value={text}
            onChange={(e)=>setText(e.target.value)}
            placeholder="Add todo"
            />
            <button onClick={addTodo}>Add</button>
         </div>
         <ul>
            {todos.map((t, i)=>(
               <TodoItem
                  key={i}
                  todo={t}
                  onToggle={()=> toggleTodo(i)}
                  onDelete={()=> deleteTodo(i)}
                  />
            ))}
         </ul>
      </div>
   )
}