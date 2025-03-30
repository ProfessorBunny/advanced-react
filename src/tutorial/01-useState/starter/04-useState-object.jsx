import { useState } from 'react'

const UseStateObject = () => {
  // const [name, setName] = useState('John')
  // const [age, setAge] = useState(25)
  // const [hobby, setHobby] = useState('badminton')
  const [person, setPerson] = useState({
    name: 'peter',
    age: 24,
    hobby: 'badminton',
  })
  const updatePerson = () => {
    // setName('Peter')
    // setAge(30)
    // setHobby('football')
    setPerson({ name: 'john', age: 28, hobby: 'football' })
  }
  return (
    <>
      {<h3>{person.name}</h3>}
      {<h3>{person.age}</h3>}
      {<h4>Enjoys To Play: {person.hobby}</h4>}
      <button className="btn" onClick={updatePerson}>
        Update
      </button>
    </>
  )
}

export default UseStateObject
