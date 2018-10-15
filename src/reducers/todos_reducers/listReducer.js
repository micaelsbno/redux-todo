const listReducer = (state = [], action) => {
  switch (action.type) {
    case 'SHOW_COMPLETED':
    return [
      ...state.slice(0, action.listId),
      {...state[action.listId], status: 'SHOW_COMPLETED'},
      ...state.slice(action.listId + 1)
    ]
    case 'SHOW_ALL':
     return [
     ...state.slice(0, action.listId), 
     {...state[action.listId], status: 'SHOW_ALL'}, 
      ...state.slice(action.listId + 1)]
    default:
      return state
  }
}

export default listReducer