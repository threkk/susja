export interface ConfigProps {
  isSino: boolean
  isWrite: boolean
  isHangul: boolean
  nativeHandler: () => void
  readHandler: () => void
  numberHandler: () => void
}

export default function Config(props: ConfigProps) {
  return (
    <section>
      <fieldset className='grid'>
        <label>
          Native{' '}
          <input
            type='checkbox'
            role='switch'
            onChange={props.nativeHandler}
            checked={props.isSino}
          />{' '}
          Sino{' '}
        </label>
        <label>
          {' '}
          Read{' '}
          <input
            type='checkbox'
            role='switch'
            onChange={props.readHandler}
            checked={props.isWrite}
          />
          Write
        </label>
        <label>
          Numbers{' '}
          <input
            type='checkbox'
            role='switch'
            onChange={props.numberHandler}
            checked={props.isHangul}
          />{' '}
          Hangul{' '}
        </label>
      </fieldset>
    </section>
  )
}
