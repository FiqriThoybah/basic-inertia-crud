import React from "react";
import Layout from "../../Components/Layout";
import { InertiaLink } from "@inertiajs/inertia-react";

const Posting = () => {
    return (
        <div className="h-screen">
            <InertiaLink
                className="py-2 px-6 bg-blue-500 rounded-[20px]"
                href={route("posting.approver")}
            >
                Approver
            </InertiaLink>
            <form className="mt-6 w-full max-w-2xl mb-4">
                <div className="md:items-center flex mb-4">
                    <div className="md:w-[220px] mb-2">
                        <label
                            className="text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                            htmlFor="reportDate"
                        >
                            Report Date
                        </label>
                        <input
                            type="date"
                            className="mt-1 py-2 px-4 blok w-full border border-black rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        />
                    </div>

                    <div className="md:w-[220px] mb-2 ml-3">
                        <label
                            className="text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                            htmlFor="jenisPosting"
                        >
                            Jenis Posting
                        </label>
                        <div className="relative">
                            <select
                                className="block appearance-none w-full bg-white border border-black  hover:border-gray-500 px-4 py-2 pr-8 mt-1 rounded-md shadow leading-tight focus:outline-none focus:shadow-outline"
                                id="submodul"
                            >
                                <option>-</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg
                                    className="fill-current h-4 w-4"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 12l-6-6 1.41-1.41L10 9.17l4.59-4.58L16 6l-6 6z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* mapping data dummy checkbox */}
                <div className="md:items-start flex flex-wrap mb-4">
                    {[...Array(8)].map((item) => (
                        <div className="py-2 px-6">
                            <label key={item} className="inline-flex items-center">
                                <input
                                    
                                    type="checkbox"
                                    className="form-checkbox text-indigo-600 h-5 w-5"
                                />
                                <span className="ml-2 text-black">
                                    finnet - Telkomsel
                                </span>
                            </label>
                        </div>
                    ))}
                </div>
                {/* button */}
                <div className="md:flex md:items-start">
                    <div className="md:w-[200px]">
                        <button
                            className="shadow bg-blue-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                            type="button"
                        >
                            Submit
                        </button>
                    </div>
                    <div className="md:w-2/3 ">
                        <button
                            className="shadow bg-green-600 hover:bg-green-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                            type="button"
                        >
                            Export
                        </button>
                    </div>
                </div>
            </form>

            <div className="mt-2 grid bg-white rounded-[20px] py-5">
                <div className="mt-8 md:flex flex-row-reverse md:items-start">
                    <div className="md:w-[300px]">
                        <a
                            href="/admin/approver"
                            className="shadow bg-blue-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                            type="button"
                        >
                            Send to Approver
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};


Posting.layout = page => <Layout children={page} />
export default Posting;
