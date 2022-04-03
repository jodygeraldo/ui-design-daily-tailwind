import list, { listByBuiltTime } from '../data/index'

/** @type {import('./index').RequestHandler} */
export async function get({ url }) {
  const searchParams = new URL(url).searchParams

  let page = Number(searchParams.get('page')) || 1
  const limit = Number(searchParams.get('limit')) || 15
  let sortedBy = searchParams.get('sort')

  if (sortedBy !== 'date' && sortedBy !== 'recent') {
    sortedBy = 'date'
  }

  const usedList = sortedBy === 'recent' ? listByBuiltTime : list

  const totalPages = Math.ceil(list.length / limit)

  if (page > totalPages) {
    page = 1
  }

  const paginatedList = usedList.slice((page - 1) * limit, page * limit)

  return {
    body: { page, totalPages, list: paginatedList, sortedBy },
  }
}
