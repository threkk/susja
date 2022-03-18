export interface ConfigProps {
  isSino: boolean
  isHangul: boolean
  nativeHandler: () => void
  numberHandler: () => void
}

export default function Config(props: ConfigProps) {
  return (
    <section>
      <fieldset className='grid'>
        <label htmlFor='isSino'>
          {' '}
          <input
            id='isSino'
            type='checkbox'
            role='switch'
            onChange={props.nativeHandler}
            checked={props.isSino}
          />
          Native/Sino
        </label>
        <label htmlFor='isHangul'>
          {' '}
          <input
            id='isHangul'
            type='checkbox'
            role='switch'
            onChange={props.numberHandler}
            checked={props.isHangul}
          />
          Digits/Hangul
        </label>
      </fieldset>
    </section>
  )
}
