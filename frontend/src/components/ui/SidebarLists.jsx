import { Link } from 'react-router-dom'
import React from 'react'

const SidebarLists = ({ link, icon, title }) => {
  return (
    <li className='sidebarItem'>
        <Link to={link} className="sidebar-link">
            {icon}
            {title && <span>{title}</span>}
        </Link>
    </li>
  )
}

export default SidebarLists;