import { Intl, Temporal } from '@js-temporal/polyfill'

export function formattedDate(day: number, month: number, year: number) {
  const dateOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }

  return Intl.DateTimeFormat(undefined, dateOptions).format(
    Temporal.PlainDate.from({
      year,
      month,
      day,
    }),
  )
}
