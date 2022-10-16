export const createNormalizeFilter = (filter) => {
  const normalizedFilter = {}

  for (const field in filter) {
    if (filter[field] || typeof filter[field] === 'boolean') {
      normalizedFilter[field] = filter[field]
    }
  }

  return normalizedFilter
}
