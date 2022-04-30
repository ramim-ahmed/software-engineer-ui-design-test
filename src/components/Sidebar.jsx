import React from "react";
import { AiOutlineFileText, AiOutlineHome } from "react-icons/ai";
import { BsGear } from "react-icons/bs";
import SidebarContent from "./SidebarContent";
const Sidebar = () => {
  return (
    <aside aria-label="Sidebar">
      <div className="sidebar_wrapper">
        <ul className="space-y-2 flex items-center sm:flex-col sm:items-start ">
         <SidebarContent icon={ <AiOutlineHome size={25} />} title='Dashboard' />
         <SidebarContent icon={ <AiOutlineFileText size={25} />} title='Inventory'active />
         <SidebarContent icon={ <AiOutlineFileText size={25} />} title='Documents'  />
         <SidebarContent icon={ <BsGear size={25} />} title='Settings' />
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
