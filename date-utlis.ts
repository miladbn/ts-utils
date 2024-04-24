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