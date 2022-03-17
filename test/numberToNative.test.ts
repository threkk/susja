import { test, expect } from 'vitest'
import numberToNative, { NATIVE_KOREAN_NUMBERS } from '../src/lib/native'

test('0', () => {
  expect(numberToNative(0)).toEqual('')
})

test('1 digit', () => {
  for (let i = 1; i < 10; i++) {
    expect(numberToNative(i)).toEqual(NATIVE_KOREAN_NUMBERS[1][i])
  }
})

test('2 digit', () => {
  for (let t = 0; t < 10; t++) {
    for (let u = 0; u < 10; u++) {
      if (t === 0 && u === 0) continue
      expect(numberToNative(t * 10 + u)).toEqual(
        `${NATIVE_KOREAN_NUMBERS[0][t]}${NATIVE_KOREAN_NUMBERS[1][u]}`
      )
    }
  }
})
