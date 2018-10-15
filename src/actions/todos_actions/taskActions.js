export const toggleCompleted = (id, listId) => {
  return {
    type:  'TOGGLE_COMPLETED',
    listId,
    id
  }
}

export const removeTask = (id, listId) =>{
  return {
    type: 'REMOVE_TASK',
    id,
    listId
  }
}

export const addTask = (content, listId) => { 
    return {
    type: 'ADD_TASK',
    completed: false,
    content,
    listId
  }
}