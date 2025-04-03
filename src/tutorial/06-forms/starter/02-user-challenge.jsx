import { useState } from 'react'
import { data } from '../../../data'
const UserChallenge = () => {
  const [name, setName] = useState('')
  const [item, setItem] = useState(data)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name) {
      alert('please enter value')
      return
    }
    const newItem = { id: new Date().getTime().toString(), name }
    const updatedUsers = [...item, newItem]
    setItem(updatedUsers)
    // setItem((oldItems) => {
    //   return [...oldItems, newItem]
    // })

    setName('')
  }
  const remover = (id) => {
    setItem(item.filter((person) => person.id !== id))
  }
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input"
            id="name"
          />
        </div>
        <h2> Users</h2>
        {item.map((item) => {
          const { id, name } = item
          return (
            <div key={id} className="item">
              <h4>{name}</h4>
              <button type="button" className="btn" onClick={() => remover(id)}>
                remove
              </button>
            </div>
          )
        })}

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      {/* render users below */}
    </div>
  )
}
export default UserChallenge
