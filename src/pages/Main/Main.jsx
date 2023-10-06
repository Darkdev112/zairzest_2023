import React from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <div>
      <h1>Welcome</h1>
      <Link to="/login"><button>Login</button></Link>
    </div>
  )
}

export default Main