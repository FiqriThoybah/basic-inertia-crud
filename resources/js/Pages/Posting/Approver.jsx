import React from "react";
import Layout from "../../Components/Layout";

const Approver = () => {
    return (
        <div className="h-screen">
            <div className="mt-8 grid bg-white rounded-[20px] py-5">
                <p className="text-2xl ml-[32px] mt-4 font-semibold">
                    List Request
                </p>
            </div>
        </div>
    );
};

Approver.layout = page => <Layout children={page} />

export default Approver;
