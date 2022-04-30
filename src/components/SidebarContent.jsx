import React from "react";

const SidebarContent = ({icon, title, active}) => {
  return (
    <li className="w-full">
      <a
        href="/"
        className={`flex items-center justify-center lg:justify-start p-2 rounded-lg ${active === true ? 'text-primary bg-white':'text-neutral_7'}`}
      >
        <span>{icon}</span>
        <span className="ml-3 hidden lg:block ">{title}</span>
      </a>
    </li>
  );
};

export default SidebarContent;
