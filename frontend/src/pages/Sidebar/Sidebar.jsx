import React, { useState } from 'react'
import SidebarLists from '../../components/ui/SidebarLists';
import { FaBars } from "react-icons/fa";
import { RiDashboardFill } from "react-icons/ri";
import { FaCalendarAlt } from "react-icons/fa";
import { RxActivityLog } from "react-icons/rx";
import { TbPresentationAnalytics } from "react-icons/tb";

import '../../styles/Sidebar/sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  }
  
  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
            {isOpen && <h2>Trading Journal</h2>}
            <FaBars onClick={toggleSidebar} clasName="sidebar-menu"/>
        </div>

        {/* List of sidebar elements */}
        <ul className='sidebar-list'>
            <SidebarLists  
                link={"/"} 
                icon={<RiDashboardFill />}
                title={isOpen ? "Dashboard" : ""}
            />  
            <SidebarLists 
                link={"/calendar"}
                icon={<FaCalendarAlt />}
                title={isOpen ? "Calendar" : ""}
            />
            <SidebarLists 
                link={"/tradecollection"}
                icon={<RxActivityLog />}
                title={isOpen ? "Trades" : ""}
            />
            <SidebarLists 
                link={"/analytics"}
                icon={<TbPresentationAnalytics />}
                title={isOpen ? "Analytics" : ""}
            />

        </ul>
    </div>
  )
}

export default Sidebar