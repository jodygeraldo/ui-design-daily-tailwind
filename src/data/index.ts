import january2022List from './2022/january'
import february2022List from './2022/february'
import march2022List from './2022/march'

export interface ItemType {
  id: number
  title: string
  date: string
  linkOriginal: string
  linkComponent: string
  imageUrl: string
}

const list: ItemType[] = [
  ...march2022List,
  ...february2022List,
  ...january2022List,
]

export { january2022List, february2022List, march2022List }
export default list
