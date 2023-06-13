import React from "react";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <div className="flex w-full ">
                
                    <div className="  bg-orange-500 md:block flex fixed h-full">
                        <Sidebar />
                    </div>

                    {/* To reset scroll region (https://inertiajs.com/pages#scroll-regions) add `scroll-region="true"` to div below */}
                    <div className="w-full ml-[240px] px-4 py-8  md:p-12 bg-orange-100">
                        {children}
                    </div>
                
            </div>

            {/* <div className="flex w-full ">
                <div className=" w-1/6 bg-orange-500 h-screen">
                    <Sidebar/>
                </div>
                    <div className=" p-10 w-full ">
                        {children}
                    </div>
                {/* <div>
                    <Navbar />
                </div> */}
            {/* </div> */}
        </React.Fragment>
    );
};

export default Layout;
