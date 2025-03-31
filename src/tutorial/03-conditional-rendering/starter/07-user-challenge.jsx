import { useState } from 'react'

const UserChallenge = () => {
  const [user, setuser] = useState(null)
  const login = () => {
    setuser({ name: 'john' })
  }
  const logout = () => {
    setuser(null)
  }
  return (
    <div>
      <h2>Challenge</h2>
      <h3>{user ? `Hello ${user.name}` : 'Please log in'}</h3>
      {user ? (
        <button className="btn" onClick={logout}>
          Logout
        </button>
      ) : (
        <button className="btn" onClick={login}>
          Login
        </button>
      )}
    </div>
  )
}

export default UserChallenge
