import { useState } from 'react'

const ToggleChallenge = () => {
  const [isWroking, setIsWroking] = useState(true)
  return (
    <div>
      <h2>Toggle Challenge</h2>
      <button className="btn" onClick={() => setIsWroking((prev) => !prev)}>
        {isWroking ? 'Set Toggle to false' : 'Set Toggle to true'}
      </button>
      {isWroking ? (
        <DisplayComponent />
      ) : (
        <div>
          <h3>Not Working</h3>
        </div>
      )}
    </div>
  )
}
const DisplayComponent = () => {
  return <h2>componet is working</h2>
}
export default ToggleChallenge
