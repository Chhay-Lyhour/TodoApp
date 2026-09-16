function TodoItem({ todo, onToggle }) {
  return (
    <li>
      <label
        className="todo-label"
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
      >
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        {todo.text}
      </label>
    </li>
  )
}

export default TodoItem
