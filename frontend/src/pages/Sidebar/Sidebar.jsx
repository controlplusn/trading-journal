import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { FaBars } from "react-icons/fa";
import '../../styles/Sidebar/sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  }
  
  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="sidebar-header">
        <h2>Trading Journal</h2>
        <FaBars onClick={toggleSidebar}/>
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