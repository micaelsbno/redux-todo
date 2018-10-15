import React from 'react'
import Task from './Task'

export default class List extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault()
      this.props.addTask(
        this.refs.content.value,
        this.props.listId
      )
    e.target.reset()
  }

  filterTasks = (tasks) => {
    switch (this.props.lists[this.props.listId].status) {
      case 'SHOW_ALL':
        return tasks.filter(task => task)
      case 'SHOW_COMPLETED':
        return tasks.filter(task => task.completed)
    }
  }

  renderTasks = (tasks) => {
    return this.filterTasks(tasks).map( (task, i) => (
      <Task 
        toggleCompleted={this.props.toggleCompleted}
        removeTask={this.props.removeTask}
        key={i}
        id={i}
        task={task}
      />
    ))
  }

  showAll = () => {
    this.props.showAll(this.props.listId)
  }

  showCompleted = () => {
    console.log(this.props)
    this.props.showCompleted(this.props.listId) 
  }

  render () {
    const tasks = this.props.tasks.filter(list => list.listId === this.props.listId)
    return (
      <div>
        <h1>{this.props.lists[this.props.listId].title}</h1>
        <button ref={'show-all'} onClick={this.showAll}>Show All</button> ––– <button ref={'show-completed'} onClick={this.showCompleted}>Show Completed</button>
        { this.renderTasks(tasks) }
        <form ref="task-form" onSubmit={this.handleSubmit} >
          <input type="text" ref="content"  />
          <button>Add</button>
        </form>
      </div>
    )
  }
}

