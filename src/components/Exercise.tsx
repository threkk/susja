import { useState } from 'react'
import numberToNative from '../lib/native'
import {
  generateRandomNativeNumber,
  generateRandomSinoNumber,
} from '../lib/random'
import numberToSino from '../lib/sino'

export interface ExerciseProps {
  isSino: boolean
  isWrite: boolean
  isHangul: boolean
}

function WriteExercise(props: {
  displayResult: boolean
  isHangul: boolean
  isSino: boolean
  result: string
}) {
  const [val, setVal] = useState('')

  if (props.displayResult) {
    return <ReadExercise displayResult={true} result={props.result} />
  }

  if (props.isHangul) {
    return (
      <input
        placeholder='Write the number here'
        type='number'
        autoCapitalize='off'
        autoCorrect='off'
        autoComplete='off'
        step={1}
        min={props.isSino ? 0 : 1}
        onChange={(ev) => setVal(ev.target.value.trim().toLowerCase())}
        max={99}
        {...(val !== '' ? { 'aria-invalid': !(val === props.result) } : {})}
      />
    )
  }
  return (
    <input
      placeholder='Spell the number here'
      type='text'
      autoComplete='off'
      autoCorrect='off'
      autoCapitalize='off'
      inputMode='text'
      onChange={(ev) => setVal(ev.target.value.trim().toLowerCase())}
      {...(val !== '' ? { 'aria-invalid': !(val === props.result) } : {})}
    />
  )
}

function ReadExercise(props: { displayResult: boolean; result: string }) {
  if (props.displayResult) {
    return (
      <h1>
        <kbd>{props.result}</kbd>
      </h1>
    )
  }
  return <div aria-busy={!props.displayResult}></div>
}

export default function Exercise(props: ExerciseProps) {
  const [displayResult, setDisplayResult] = useState(false)
  const [num, setNum] = useState(1)

  const resolver: (n: number) => string = props.isSino
    ? numberToSino
    : numberToNative

  const next = () => {
    const generator: () => number = props.isSino
      ? generateRandomSinoNumber
      : generateRandomNativeNumber
    setDisplayResult(false)
    setNum(generator())
  }

  const guess = props.isHangul ? resolver(num) : num.toString()
  const result = props.isHangul ? num.toString() : resolver(num)

  const exercise = props.isWrite ? (
    <WriteExercise
      displayResult={displayResult}
      result={result}
      isHangul={props.isHangul}
      isSino={props.isSino}
    />
  ) : (
    <ReadExercise displayResult={displayResult} result={result} />
  )

  return (
    <>
      <section className='grid'>
        <div style={{ textAlign: 'center' }}>
          <h1>
            <kbd>{guess}</kbd>
          </h1>
        </div>
        <div style={{ textAlign: 'center' }}>{exercise}</div>
      </section>
      <section className='grid'>
        <div>
          <button onClick={next}>Next</button>
        </div>
        <div>
          <button className='secondary' onClick={() => setDisplayResult(true)}>
            See result
          </button>
        </div>
      </section>
    </>
  )
}
