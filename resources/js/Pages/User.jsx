import React from "react";
import Layout from "../Components/Layout";
import { Helmet } from "react-helmet";
import { InertiaLink } from "@inertiajs/inertia-react";
import swal from "sweetalert";
import { Inertia } from "@inertiajs/inertia";

const handleDelete = (id) => {
    swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    }).then((willDelete) => {
        if (willDelete) {
            Inertia.delete(route("users.destroy", id), {
                onSuccess: () => {
                    swal("Data sudah dihapus");
                },
            });
        }
    });
};
const User = ({ users, create_url }) => {
    console.log("user :", users);
    return (
        <div className="h-[100vh]">
            <Helmet>
                <title>Users</title>
            </Helmet>
            <h1 className=" font-semibold text-2xl text-center mb-6">
                Daftar User
            </h1>

            {/* {users.map((item) => (
            <ul key={item.id}>
                <li>{item.id}</li>
                <li>{item.name}</li>
                <li>{item.email}</li>
            </ul>
        ))} */}
            {/* component */}
            {/* This is an example component */}
            <InertiaLink
                className="py-2 px-6 bg-blue-500 rounded-[20px]"
                href={route("users.create")}
            >
                Create User
            </InertiaLink>
            <div className="max-w-2xl mt-6 mx-auto">
                <div className="flex flex-col">
                    <div className="overflow-x-auto shadow-md sm:rounded-lg">
                        <div className="inline-block min-w-full align-middle">
                            <div className="overflow-hidden ">
                                <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                                    <thead className="bg-gray-100 dark:bg-gray-700">
                                        <tr>
                                            <th scope="col" className="p-4">
                                                <div className="flex items-center">
                                                    <label htmlFor="checkbox-all">
                                                        NO
                                                    </label>
                                                </div>
                                            </th>
                                            <th
                                                scope="col"
                                                className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase "
                                            >
                                                Gambar
                                            </th>
                                            <th
                                                scope="col"
                                                className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                                            >
                                                Name
                                            </th>
                                            <th
                                                scope="col"
                                                className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                                            >
                                                Email
                                            </th>
                                            <th scope="col" className="p-4">
                                                <span>Edit</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                                        {users.map((item, index) => (
                                            <tr key={item.id}>
                                                <td className="px-2 py-4 whitespace-nowrap">
                                                    {index + 1}
                                                </td>
                                                <td className="px-2 py-4 whitespace-nowrap">
                                                    <div >
                                                        <img className="h-6 w-10 rounded-[20px]" src={item.image} alt="" />
                                                    </div>
                                                </td>
                                                <td className="px-2 py-4 whitespace-nowrap">
                                                    {item.name}
                                                </td>
                                                <td className="px-2 py-4 whitespace-nowrap">
                                                    {item.email}
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="flex justify-end gap-4">
                                                        <InertiaLink
                                                            href={route(
                                                                "users.edit",
                                                                item.id
                                                            )}
                                                        >
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                strokeWidth="1.5"
                                                                stroke="currentColor"
                                                                className="h-6 w-6"
                                                                x-tooltip="tooltip"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                                                                />
                                                            </svg>
                                                        </InertiaLink>
                                                        <button
                                                            onClick={handleDelete.bind(
                                                                this,
                                                                item.id
                                                            )}
                                                        >
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                strokeWidth="1.5"
                                                                stroke="currentColor"
                                                                className="h-6 w-6"
                                                                x-tooltip="tooltip"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                                                />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="mt-5">
                    This table component is part of a larger, open-source
                    library of Tailwind CSS components. Learn more by going to
                    the official{" "}
                    <a
                        className="text-blue-600 hover:underline"
                        href="#"
                        target="_blank"
                    >
                        Flowbite Documentation
                    </a>
                    .
                </p>
            </div>
        </div>
    );
};

User.layout = (page) => <Layout children={page} />;
export default User;
