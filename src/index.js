import React from 'react';
import { Provider } from 'react-redux'

import store, { history } from './store'
import Main from './components/Main';
import { ConnectedRouter } from 'connected-react-router'

import { Route } from 'react-router'
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import TodoList from './components/todo_list/TodoList'
import Contact from './components/Contact'
import About from './components/About'

const router = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Main />   
        <Route exact path='/' component={TodoList} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
      </div>
    </ConnectedRouter>
  </Provider>
)

ReactDOM.render(router, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

