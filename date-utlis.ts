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
  