import React from "react";
import { NavLink } from "react-router-dom";
import { sidebarContent } from "../Data/dummy";

const Sidebar = () => {
  return (
    <aside className=" flex w-64 flex-shrink-0 flex-col gap-5 overflow-auto bg-gray-100 p-5 pt-7">
      {sidebarContent.map((item) => {
        const { id, title, links } = item;
        return (
          <div
            key={id}
            className="font-sans text-xs font-semibold uppercase tracking-wide text-gray-600 "
          >
            <h1>{title}</h1>
            <SidebarItems links={links} domain={title} />
          </div>
        );
      })}
    </aside>
  );
};

export default Sidebar;

const SidebarItems = ({ links, domain }) => {
  const sidebarActiveLink = ({ isActive }) => {
    return `sidebar-link ${isActive && `bg-gray-200`} hover:bg-gray-200 `;
  };

  return (
    <>
      <div className="mt-2 flex flex-col gap-1">
        {links.map((link) => {
          const { id, icon, title, notificationCount } = link;
          return (
            <NavLink
              key={id}
              className={sidebarActiveLink}
              to={`/${domain.toLowerCase()}/${title.toLowerCase()}`}
            >
              {icon && <span className="text-lg text-gray-500">{icon}</span>}
              {title}
              {notificationCount > 0 && (
                <h6 className="ml-auto rounded-full bg-gray-300 px-3 py-[1px] text-xs ">
                  {notificationCount}
                </h6>
              )}
            </NavLink>
          );
        })}
      </div>
    </>
  );
};
