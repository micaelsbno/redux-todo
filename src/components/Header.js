import React from 'react'
import { Link } from 'react-router-dom'

export default class Header extends React.Component {
  render () {
    return (
      <div>
        <h1>This is the todo-list app</h1>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
      </div>
    )
  }
}