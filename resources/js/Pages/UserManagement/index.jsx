import React from "react";
import Layout from "../../Components/Layout";

const index = () => {
    return <div>User Management</div>;
};

index.layout = page => <Layout children={page} />;

export default index;
