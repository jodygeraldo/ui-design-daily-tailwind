import list from '../data/index'

/** @type {import('./index').RequestHandler} */
export async function get({ url }) {
  const searchParams = new URL(url).searchParams

  let page = Number(searchParams.get('page')) || 1
  const limit = Number(searchParams.get('limit')) || 15

  const totalPages = Math.ceil(list.length / limit)

  if (page > totalPages) {
    page = 1
  }

  const paginatedList = list.slice((page - 1) * limit, page * limit)

  return {
    body: { page, totalPages, paginatedList },
  }
}
