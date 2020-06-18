let nextQueryId = 0

export const addQuery = (text) => ({
  type: 'ADD_Query',
  id: nextQueryId++,
  text
})

