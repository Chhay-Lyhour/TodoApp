import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className="card">
      <h1>404 — Page not found</h1>
      <p>There's nothing here.</p>
      <Link to="/todos">Go back to Todos</Link>
    </section>
  )
}

export default NotFound
