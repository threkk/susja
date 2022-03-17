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
        <div>
          <input
            id='isSino'
            type='checkbox'
            role='switch'
            onChange={props.nativeHandler}
            checked={props.isSino}
          />
          <label htmlFor='isSino'>Native / Sino</label>
        </div>
        <div>
          <input
            id='isWrite'
            type='checkbox'
            role='switch'
            onChange={props.readHandler}
            checked={props.isWrite}
          />
          <label htmlFor='isWrite'>Read / Write</label>
        </div>
        <div>
          <input
            id='isHangul'
            type='checkbox'
            role='switch'
            onChange={props.numberHandler}
            checked={props.isHangul}
          />
          <label htmlFor='isHangul'>Digits / Hangul</label>
        </div>
      </fieldset>
    </section>
  )
}
