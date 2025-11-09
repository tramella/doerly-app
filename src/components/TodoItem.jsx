export default function TodoItem({todo, onToggle, onDelete, onEdit, onChnagePriority}){
   return (
      <li className={todo.done ? 'todo-item done': 'todo-item'}>
         <span>{todo.text}</span>
         <small>{todo.date}</small>
         <div className="todo-actions">
            <button onClick={onToggle}>✔</button>
        <button className="delete" onClick={onDelete}>✖</button>
         </div>
      </li>
   );
}