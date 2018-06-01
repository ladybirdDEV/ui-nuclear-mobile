export const minDate = new Date(2015, 8, 15, 10, 30, 0)
export const maxDate = new Date(2018, 1, 1, 23, 49, 59)
export const now = new Date()
export function format (date) {
  let mday = date.getDate()
  let month = date.getMonth() + 1
  month = month < 10 ? `0${month}` : month
  mday = mday < 10 ? `0${mday}` : mday
  return `${date.getFullYear()}-${month}-${mday} ${date.getHours()}:${date.getMinutes()}`
}
