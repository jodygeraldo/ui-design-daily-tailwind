import { Intl, Temporal } from '@js-temporal/polyfill'

export function formattedDate(
  day: number,
  month: number,
  year: number,
  index?: number,
) {
  const dateOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }

  return {
    formatted: Intl.DateTimeFormat(undefined, dateOptions).format(
      Temporal.PlainDateTime.from({
        year,
        month,
        day,
      }),
    ),
    raw: `${month} ${day} ${year} 0${index ?? 0}:`,
  }
}
