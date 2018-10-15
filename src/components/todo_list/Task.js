import React from 'react'

class Task extends React.Component {
  
  taskId = this.props.taskId

  toggleCompleted = (e) => {
    this.props.toggleCompleted(this.props.id, this.props.task.listId)
  }

  removeTask = () => {
    this.props.removeTask(this.props.id, this.props.task.listId)
  }

  render () {
    const { task } = this.props
    return (
      <div>
        <button onClick={this.toggleCompleted}><p className={`completed-${task.completed}`}> {task.content} {task.completed.toString()}</p></button>
        <button onClick={this.removeTask}>&times;</button>
      </div>
      
    )
  }
}

export default Task