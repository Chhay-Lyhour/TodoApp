import TodoItem from './TodoItem.jsx'

function TodoList({ todos, onToggle }) {
  if (todos.length === 0) {
    return <p>No todos to show.</p>
  }

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
      ))}
    </ul>
  )
}

export default TodoList
