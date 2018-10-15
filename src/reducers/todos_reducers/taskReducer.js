const taskReducer = (state = [], action) => {
  let list = state.filter(task => task.listId === action.listId)
  switch (action.type) {
    case 'ADD_TASK':
      // let lastId = Math.max.apply(Math, state.map(task => task.taskId))
      return [...state,{ 
        content: action.content,
        completed: action.completed,
        listId: action.listId,
      }]
    case 'REMOVE_TASK':
      
      return [
        ...state.filter(task => task.listId !== action.listId),
        ...list.slice(0,action.id),
        ...list.slice(action.id + 1)
      ]
    case 'TOGGLE_COMPLETED':
      return [
        ...state.filter(task => task.listId !== action.listId),
        ...list.slice(0,action.id),
        {...list[action.id], completed: list[action.id].completed ? false : true},
        ...list.slice(action.id + 1)
      ]
    default:
      return state
  }
}

export default taskReducer