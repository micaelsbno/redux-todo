import React from 'react'
import { bindActionCreators } from 'redux'

import * as taskActions from '../../actions/todos_actions/taskActions'
import * as listActions from '../../actions/todos_actions/listActions'
import List from './List'
import { connect } from 'react-redux'

class TodoList extends React.Component {
  
  renderLists = (lists) => {
    return lists.map( (list,i) => (
        <List 
          {...this.props} 
          key={i} 
          listId={i}
        />
    ))
  }

  render() {
    return (
      <div>
        This is the todo-list
        { this.renderLists(this.props.lists) }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks,
  lists: state.lists
})

const mapDispatchtoProps = dispatch => {
  return bindActionCreators({...taskActions, ...listActions}, dispatch)
} 

export default connect(mapStateToProps, mapDispatchtoProps)(TodoList)