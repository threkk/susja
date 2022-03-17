import { test, expect } from 'vitest'
import numberToSino, { SINO_KOREAN_NUMBERS, TEN, ZERO } from '../src/lib/sino'

test('Zero', () => {
  expect(numberToSino(0)).toEqual(ZERO)
})

test('1 digit', () => {
  for (let i = 1; i < 10; i++) {
    expect(numberToSino(i)).toEqual(SINO_KOREAN_NUMBERS[i])
  }
})

test('10s', () => {
  expect(numberToSino(10)).toEqual(TEN)

  for (let i = 1; i < 10; i++) {
    expect(numberToSino(10 + i)).toEqual(`${TEN}${SINO_KOREAN_NUMBERS[i]}`)
  }
})

test('>10s', () => {
  for (let t = 2; t < 10; t++) {
    for (let u = 0; u < 10; u++) {
      expect(numberToSino(t * 10 + u)).toEqual(
        `${SINO_KOREAN_NUMBERS[t]}${TEN}${SINO_KOREAN_NUMBERS[u]}`
      )
    }
  }
})
