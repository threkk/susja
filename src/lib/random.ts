function generateRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export function generateRandomNativeNumber(): number {
  return generateRandomNumber(1, 99)
}

export function generateRandomSinoNumber(): number {
  return generateRandomNumber(0, 99)
}
