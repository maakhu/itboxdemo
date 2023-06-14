import React from 'react'
import { NavLink} from 'react-router-dom'
import './Menu.scss'

function Menu() {
  return (
    <div className='Menu'>
      <div className="section">
        <div className="menuComponent"><NavLink to='/items'><h4>Buildings</h4></NavLink></div>
        <div className="menuComponent"><NavLink to='/item'><h4>Battle</h4></NavLink></div>
        <div className="menuComponent"><NavLink to='/rentByDate'><h4>Leaderboard</h4></NavLink></div>
        </div>
    </div>
  )
}

export default Menu