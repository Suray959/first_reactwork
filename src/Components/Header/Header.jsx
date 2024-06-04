import React from 'react'
import Navbar  from '../Navbar/Navbar'
import style from './Header.module.css'

function Header() {
  return (
    <div className={style.header}>
      <h2>My Todo List</h2>
        <Navbar/>
    </div>
  )
}

export default Header