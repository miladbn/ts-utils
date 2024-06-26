import moment, * as Moment from 'moment-jalaali'
export const jalaliToGregorian = (
    jalali: string,
    hasTime: boolean = false
  ): string => {
    if (hasTime) {
      return moment(jalali, 'jYYYY/jMM/jDD HH:mm:ss').format(
        'YYYY-MM-DD HH:mm:ss'
      )
    } else {
      const swap = moment(jalali, 'jYYYY/jMM/jDD').format('YYYY-MM-DD')
      return `${swap}T00:00:01Z`
    }
}
  

export const gregorianToJalali = (
    gregorian: Date | string,
    hasTime: boolean = false
  ): string => {
    gregorian = new Date(gregorian)
    gregorian = `${gregorian.getFullYear()}-${
      gregorian.getMonth() + 1
    }-${gregorian.getDate()} ${gregorian.getHours()}:${gregorian.getMinutes()}:${gregorian.getSeconds()}`
    return moment(`${gregorian}`, 'YYYY-MM-DD HH:mm:ss').format(
      hasTime ? 'jYYYY/jMM/jDD HH:mm:ss' : 'jYYYY/jMM/jDD'
    )
}
  
export const gregorianToJalaliOnlyTime = (gregorian: Date | string): string => {
  gregorian = new Date(gregorian)
  gregorian = `${gregorian.getFullYear()}-${
    gregorian.getMonth() + 1
  }-${gregorian.getDate()} ${gregorian.getHours()}:${gregorian.getMinutes()}:${gregorian.getSeconds()}`
  return moment(`${gregorian}`, 'YYYY-MM-DD HH:mm:ss').format('HH:mm')
}

export const addDays = (date: Date, days: number): Date => {
  date.setDate(date.getDate() + days)
  return date
}
export function extractTime(isoString: string) {
  const date = new Date(isoString)
  const hours = String(date.getUTCHours()).padStart(2, '0')
  const minutes = String(date.getUTCMinutes()).padStart(2, '0')

  return `${hours}:${minutes}`
}
export function getPersianMonthData(dateTime: string) {
  const d = new Date(gregorianToJalali(dateTime))

  const month: string = new Intl.DateTimeFormat('fa-IR-u-nu-latn', {
    month: 'short'
  }).format(d)

  const day: string = new Intl.DateTimeFormat('fa-IR-u-nu-latn', {
    day: '2-digit'
  }).format(d)

  return { day, month }
}
export const addHours = (date: Date, hours: number): Date => {
  date.setHours(date.getHours() + hours)
  return date
}