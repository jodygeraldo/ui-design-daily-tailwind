import { formattedDate } from '$lib/utils'
import type { ItemType } from './index'

const below2021List: ItemType[] = [
  {
    id: 287,
    title: 'Add Members',
    date: formattedDate(13, 4, 2017).formatted,
    linkOriginal:
      'https://www.uidesigndaily.com/posts/figma-add-members-list-widget-tags-day-287',
    linkComponent: '/2017/april/13-add-members',
    imageUrl: 'below2021/day287.png',
    builtOn: formattedDate(3, 4, 2022, 4),
  },
]

export default below2021List
