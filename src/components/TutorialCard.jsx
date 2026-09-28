import { useState } from 'react'

export default function TutorialCard() {
  const [completed, setCompleted] = useState(false)
  return (
    <button onClick={() => setCompleted(!completed)}>
      {completed ? 'Reviewed' : 'Practice React'}
    </button>
  )
}   