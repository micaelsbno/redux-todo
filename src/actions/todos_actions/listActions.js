export const showCompleted = (listId) => { 
    return {
    type: 'SHOW_COMPLETED',
    listId
  }
}

export const showAll = (listId) => {
  return {
    type: 'SHOW_ALL',
    listId
  }
}