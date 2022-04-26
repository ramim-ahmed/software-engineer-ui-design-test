import React from "react";
import { AiOutlineFileText, AiOutlineHome } from "react-icons/ai";
import { BsGear } from "react-icons/bs";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";
const Sidebar = () => {
  return (
    <div className="w-1/6 pt-4 px-4 space-y-3 flex flex-col text-left border-r border-gray-500 h-screen border-opacity-10">
      <SidebarContent title='Dashboard' icon={<AiOutlineHome size={25} />} />
      <SidebarContent title='Inventory' icon={<AiOutlineFileText size={25} />} active/>
      <SidebarContent title='Documents' icon={<HiOutlineDocumentDuplicate size={25} />} />
      <SidebarContent title='Settings' icon={<BsGear size={25} />} />
    </div>
  );
};

export default Sidebar;

const SidebarContent = ({ title, icon, active }) => {
  return (
    <div>
     <button className={active === true ? ' bg-white w-full text-left p-2 rounded-md shadow' : 'p-2 text-neutral_7'}>
     
      <p className="flex items-center space-x-3"><span className={`${active === true ? 'text-primary': ''}`}>{icon}</span><span className={`${active === true ? 'text-primary': ''} hidden md:block `}>{title}</span></p>
     </button>
    </div>
  );
};
