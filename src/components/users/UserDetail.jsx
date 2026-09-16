import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

function UserDetail() {
  const { id } = useParams()
  const [user, setUser] = useState(null)
  const [status, setStatus] = useState('loading') // 'loading' | 'error' | 'success'
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false

    async function loadUser() {
      setStatus('loading')
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`,
        )
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`)
        }
        const data = await response.json()
        if (!cancelled) {
          setUser(data)
          setStatus('success')
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message)
          setStatus('error')
        }
      }
    }

    loadUser()

    return () => {
      cancelled = true
    }
  }, [id])

  return (
    <section className="card">
      <p>
        <Link to="/users">&larr; Back to directory</Link>
      </p>

      {status === 'loading' && (
        <ul>
          <li className="skeleton-line" />
          <li className="skeleton-line" />
        </ul>
      )}

      {status === 'error' && <p>Something went wrong: {error}</p>}

      {status === 'success' && (
        <>
          <h2>{user.name}</h2>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Company: {user.company?.name}</p>
          <p>
            Address: {user.address?.street}, {user.address?.city}
          </p>
        </>
      )}
    </section>
  )
}

export default UserDetail
