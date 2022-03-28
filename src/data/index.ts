import { Intl, Temporal } from '@js-temporal/polyfill'
import january2022List from './2022/january'

function formattedDate(day: number, month: number, year: number) {
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

export interface ItemType {
  id: number
  title: string
  date: string
  linkOriginal: string
  linkComponent: string
  imageUrl: string
}

const list: ItemType[] = [...january2022List]

export { january2022List, formattedDate }
export default list
