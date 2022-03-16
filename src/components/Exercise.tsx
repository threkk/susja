import { useState } from 'react'

export interface ExerciseProps {
  isSino: boolean
  isWrite: boolean
  isHangul: boolean
}

function WriteExercise(props: { displayResult: boolean }) {
  return <input placeholder='Write the number here' />
}

function ReadExercise(props: { displayResult: boolean }) {
  return <div aria-busy={!props.displayResult}></div>
}

export default function Exercise(props: ExerciseProps) {
  const [displayResult, setDisplayResult] = useState(false)

  const exercise = props.isWrite
    ? WriteExercise({ displayResult })
    : ReadExercise({ displayResult })

  return (
    <>
      <section className='grid'>
        <div style={{ textAlign: 'center' }}>
          <h1>
            <kbd>01</kbd>
          </h1>
        </div>
        <div>{exercise}</div>
      </section>
      <section className='grid'>
        <div>
          <button>Next</button>
        </div>
        <div>
          <button onClick={() => setDisplayResult(true)}>See result</button>
        </div>
      </section>
    </>
  )
}
