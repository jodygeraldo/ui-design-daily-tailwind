import { formattedDate, type ItemType } from '..'

const list: ItemType[] = [
  {
    id: 1542,
    title: 'Users List',
    date: formattedDate(1, 2, 2022),
    linkOriginal:
      'https://www.uidesigndaily.com/posts/figma-users-list-card-day-1542',
    linkComponent: '/2022/february/1-users-list',
    imageUrl: '1-february-2022.png',
  },
]

export const pendingList: ItemType[] = [
  {
    id: 1543,
    title: 'To Do List',
    date: formattedDate(2, 2, 2022),
    linkOriginal:
      'https://www.uidesigndaily.com/posts/figma-to-do-list-day-1543',
    linkComponent: '/2022/february/2-to-do-list',
    imageUrl: '2-february-2022.png',
  },
  {
    id: 1544,
    title: 'User Card',
    date: formattedDate(3, 2, 2022),
    linkOriginal:
      'https://www.uidesigndaily.com/posts/figma-user-card-profile-day-1544',
    linkComponent: '/2022/february/3-user-card',
    imageUrl: '3-february-2022.png',
  },
]

export default list
