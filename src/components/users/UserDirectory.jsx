import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function UserDirectory() {
  const [users, setUsers] = useState([])
  const [status, setStatus] = useState('loading') // 'loading' | 'error' | 'success'
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false

    async function loadUsers() {
      setStatus('loading')
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users',
        )
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`)
        }
        const data = await response.json()
        if (!cancelled) {
          setUsers(data)
          setStatus('success')
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message)
          setStatus('error')
        }
      }
    }

    loadUsers()

    return () => {
      cancelled = true
    }
  }, [])

  return (
    <section className="card">
      <h1>Users</h1>

      {status === 'loading' && (
        <ul>
          <li className="skeleton-line" />
          <li className="skeleton-line" />
          <li className="skeleton-line" />
        </ul>
      )}

      {status === 'error' && <p>Something went wrong: {error}</p>}

      {status === 'success' && users.length === 0 && <p>No users found.</p>}

      {status === 'success' && users.length > 0 && (
        <ul className="user-list">
          {users.map((user) => (
            <li key={user.id}>
              <Link to={`/users/${user.id}`}>
                {user.name} — {user.email}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default UserDirectory
