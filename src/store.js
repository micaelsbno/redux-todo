import { createStore, applyMiddleware, compose } from 'redux'
import { createBrowserHistory } from 'history'
import { connectRouter, routerMiddleware } from 'connected-react-router'

// import createHistory from 'history/createBrowserHistory'
import thunk from 'redux-thunk'
import combineReducers from './reducers/rootReducer'

const initialState = {
  tasks: [
    {
      taskId: 0,
      listId: 0,
      content: 'take out garbage',
      completed: false
    },
    {
      taskId: 1,
      listId: 1,
      content: 'andromeda',
      completed: true
    }
  ],
  lists: [
   { title: 'Todo-list', status: 'SHOW_ALL' },
   { title: 'star-list', status: 'SHOW_ALL' }
  ]
}

export const history = createBrowserHistory()
const middleware = [thunk, routerMiddleware(history)]

export const store = createStore(
  connectRouter(history)(combineReducers), 
  initialState, 
  compose(
    applyMiddleware(...middleware),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

export default store