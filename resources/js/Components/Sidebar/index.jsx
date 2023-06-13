import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";

const parsePage = (path) => path.split('/')
    
const Sidebar = () => {
    let pageActive = parsePage(window.location.pathname)
    console.log(pageActive);
    const Menus = [
        { menu: "Dashboard Rekon", href: "/home" },
        { menu: "Finnet Rekon", href: "/finnet" },
        { menu: "Manage Rekon", href: "/manage-rekon" },
        { menu: "Posting", href: "/posting" },
        { menu: "Audit Trial", href: "/audit-trial" },
        { menu: "File Management", href: "/file-management" },
        { menu: "User Management", href: "/user-management" },
        { menu: "User Rights", href: "/user-rights" },   
        { menu: "Users", href: "/users" },
        
    ];

    return (
        <React.Fragment>
            <div className="text-white w-60">
                {/* <p className="text-2xl">{count}</p> */}
                <div className=" items-center pt-[30px] pb-[20px] uppercase bg-slate-800 p-2 mb-4">
                    <p className="flex items-center ml-1 text-[40px] font-bold ">BSI 
                        <span className="font-medium text-sm">Bank Syariah <br /> Indonesia</span>
                    </p> 
                    <p className="text-[8px] ml-3  font-medium">Create By : Fiqri</p>
                </div>
            
                <div className="">
                    {Menus.map((menu, index) => (
                        <Menu pageActive={`/${pageActive[1]}`}  key={index} href={menu.href}>
                            {menu.menu}
                        </Menu>
                    ))}
                </div>
            </div>
        </React.Fragment>
    );
};

export default Sidebar;

const Menu = React.memo(({ children, href, pageActive }) => {
    return (
        <div>
            <InertiaLink className="" href={href}>
                <button className={`${href === pageActive ? 'bg-slate-900' : ''} py-2 font-semibold text-lg flex  justify-start pl-10 rounded-lg w-full`}>
                    {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-5 h-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h7"
                        />
                    </svg> */}
                    <p>{children}</p>
                </button>
            </InertiaLink>
        </div>
    );
});
