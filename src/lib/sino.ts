export const SINO_KOREAN_NUMBERS: string[] = [
  '',
  '일',
  '이',
  '삼',
  '사',
  '오',
  '육',
  '칠',
  '팔',
  '구',
]
export const ZERO = '영'
export const TEN = '십'

export default function numberToSino(n: number): string {
  // Zero
  if (n === 0) return ZERO

  // 1 digit
  if (n < 10) {
    return SINO_KOREAN_NUMBERS[n]
  }

  // 2 digit
  return n
    .toString()
    .split('')
    .map((digit: string, index: number): string => {
      const d = parseInt(digit, 10)

      // The digit is an unit.
      if (index > 0) {
        return SINO_KOREAN_NUMBERS[d]
      }

      if (d === 1) {
        return TEN
      }

      return `${SINO_KOREAN_NUMBERS[d]}${TEN}`
    })
    .join('')
}
