import CheatSheet from '../components/Cheatsheet'
import Config, { ConfigProps } from '../components/Config'
import Exercise from '../components/Exercise'
import { useState } from 'react'

function App() {
  const [isSino, setSino] = useState(false)
  const [isWrite, setWrite] = useState(false)
  const [isHangul, setHangul] = useState(false)

  const configProps: ConfigProps = {
    isSino,
    isWrite,
    isHangul,
    nativeHandler: () => setSino(!isSino),
    readHandler: () => setWrite(!isWrite),
    numberHandler: () => setHangul(!isHangul),
  }

  return (
    <>
      <main className='container'>
        <article>
          <Config {...configProps} />
          <Exercise isHangul={isHangul} isSino={isSino} isWrite={isWrite} />
        </article>
        <CheatSheet />
      </main>
      <footer className='container-fluid'>
        <small>
          Created by <a href='https://threkk.com/'>threkk</a>. Source code
          avaiable on <a href='https://github.com/threkk/susja'>Github</a>.
        </small>
      </footer>
    </>
  )
}

export default App
