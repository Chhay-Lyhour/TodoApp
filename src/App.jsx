import { Routes, Route, Navigate, NavLink } from 'react-router-dom'
import TodoApp from './components/todos/TodoApp.jsx'
import Clock from './components/Clock.jsx'
import UserDirectory from './components/users/UserDirectory.jsx'
import UserDetail from './components/users/UserDetail.jsx'
import NotFound from './components/NotFound.jsx'

function App() {
  return (
    <>
      <nav>
        <NavLink to="/todos">Todos</NavLink>
        <NavLink to="/users">Users</NavLink>
      </nav>

      <Clock />

      <Routes>
        <Route path="/" element={<Navigate to="/todos" replace />} />
        <Route path="/todos" element={<TodoApp />} />
        <Route path="/users" element={<UserDirectory />} />
        <Route path="/users/:id" element={<UserDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
