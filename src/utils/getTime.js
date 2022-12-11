export const getTime = (date, duration) => {
  const originTime = Date.parse(date)
  const destTime = Date.parse(date) + duration * 60 * 1000
  return {
    originMin: ('0' + Math.floor((originTime / 1000 / 60) % 60)).slice(-2),
    originHours: ('0' + Math.floor((originTime / 1000 / 60 / 60) % 24)).slice(-2),
    destMin: ('0' + Math.floor((destTime / 1000 / 60) % 60)).slice(-2),
    destHours: ('0' + Math.floor((destTime / 1000 / 60 / 60) % 24)).slice(-2),
  }
}
