import React from 'react'
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Trading Journal</h2>
      </div>

      <ul className='sidebar-list'>
        {SidebarData.map((item, index) => (
          <li key={index} className='sidebar-item'>
            <Link to={item.link} className='sidebar-link'>
              {item.title}
            </Link>
          </li>
        ))}

      </ul>
    </div>
  )
}

export default Sidebar