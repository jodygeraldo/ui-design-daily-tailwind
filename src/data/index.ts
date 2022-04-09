import april2022List from './2022/april'
import february2022List from './2022/february'
import january2022List from './2022/january'
import march2022List from './2022/march'
import below2021List from './below2021'

export interface ItemType {
  id: number
  title: string
  date: string
  linkOriginal: string
  linkComponent: string
  imageUrl: string
  builtOn: {
    formatted: string
    raw: string
  }
  responsiveness?: string
}

// sorted by date
const list: ItemType[] = [
  ...april2022List,
  ...march2022List,
  ...february2022List,
  ...january2022List,
  ...below2021List,
]

// sorted by built time
const listByBuiltTime: ItemType[] = [...list].sort(
  (a, b) =>
    new Date(b.builtOn.raw).getTime() - new Date(a.builtOn.raw).getTime(),
)

export {
  below2021List,
  january2022List,
  february2022List,
  march2022List,
  april2022List,
  listByBuiltTime,
}
export default list
