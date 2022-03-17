import numberToNative from '../lib/native'
import numberToSino from '../lib/sino'

export default function CheatSheet() {
  const rows = Array(100)
    .fill(null)
    .map((_, i) => (
      <tr key={i}>
        <th scope='row'>{i}</th>
        <td className='number'>{numberToNative(i)}</td>
        <td className='number'>{numberToSino(i)}</td>
      </tr>
    ))

  return (
    <aside>
      <details>
        <summary>Cheat sheet</summary>
        <figure>
          <table role='grid'>
            <thead>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Native Korean</th>
                <th scope='col'>Sino Korean</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </table>
        </figure>
      </details>
    </aside>
  )
}
