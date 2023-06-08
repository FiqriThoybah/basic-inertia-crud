import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";

const parsePage = (path) => path.split('/')
    
const Sidebar = () => {
    let pageActive = parsePage(window.location.pathname)
    console.log(pageActive);
    const Menus = [
        { menu: "Home", href: "/" },
        { menu: "Users", href: "/users" },
        { menu: "Profile", href: "/home" },
        
    ];

    return (
        <React.Fragment>
            <div className="text-white w-full   ">
                {/* <p className="text-2xl">{count}</p> */}
                <div className="flex bg-slate-800 justify-center p-2 mb-4">
                    <p className="text-2xl font-semibold ">BSI</p>
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
                <button className={`${href === pageActive ? 'bg-slate-900' : ''} py-2 font-semibold text-lg flex items-center justify-center rounded-lg w-full`}>
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
