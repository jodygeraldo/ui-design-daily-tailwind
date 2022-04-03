import january2022List from './2022/january'
import february2022List from './2022/february'
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
}

// sorted by date
const list: ItemType[] = [
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
  january2022List,
  february2022List,
  march2022List,
  below2021List,
  listByBuiltTime,
}
export default list
