import { useState } from 'react'
import { data } from '../../../data'
const UseStateArray = () => {
  const [people, setPeople] = useState(data)
  const clearSelected = (id) => {
    let newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople)
  }
  const clearAll = () => {
    setPeople([])
  }
  return (
    <>
      {people.map((person) => {
        const { id, name } = person

        return (
          <>
            <div key={id}>
              <h4>{name}</h4>
              <button
                type="button"
                className="btn"
                onClick={() => clearSelected(id)}
              >
                Remove
              </button>
            </div>
          </>
        )
      })}
      <button
        type="button"
        style={{ marginTop: '2rem' }}
        className="btn"
        onClick={clearAll}
      >
        Clear All
      </button>
    </>
  )
}

export default UseStateArray
