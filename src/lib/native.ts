export const NATIVE_KOREAN_NUMBERS: [string[], string[]] = [
  ['', '열', '스물', '서른', '마흔', '쉰', '예순', '일흔', '여든', '아흔'],
  ['', '하나', '둘', '셋', '넷', '다섯', '여섯', '일곱', '여덟', '아홉'],
]

export default function numberToNative(n: number): string {
  // 1 digit
  if (n < 10) return NATIVE_KOREAN_NUMBERS[1][n]

  // 2 digit
  return n
    .toString()
    .split('')
    .map((digit: string, idx: number): string => {
      const d = parseInt(digit, 10)
      return NATIVE_KOREAN_NUMBERS[idx][d]
    })
    .join('')
}
