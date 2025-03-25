import { Link } from 'react-router-dom'
import React from 'react'

const sidebarLists = ({ link, icon, title }) => {
  return (
    <li className='sidebarItem'>
        <Link to={link} className="sidebar-link">
            {icon}
            <p>{title}</p>
        </Link>
    </li>
  )
}

export default sidebarLists