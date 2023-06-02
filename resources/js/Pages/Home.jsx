import { Helmet } from "react-helmet";
import Layout from "../Components/Layout";

export default function Home(props) {
    console.log(props);
    return (
    <div>
        <Helmet>
            <title>Home</title>    
        </Helmet>    
            <div className="text-center bg-red-500  ">
                <p>Nama : {props.name}</p>
                <p>Company : {props.company}</p>
                <h1 className="mt-8 font-semibold text-4xl">Hello world!</h1>
            </div>
            <div>
                {/* form submit */}
                <form className="mt-6 w-full max-w-2xl mb-4">
                    <div className="md:flex md:items-center mb-4">
                    <div className="md:w-[200px]">
                        <label className=" text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="modul">
                        Modul Rekon
                        </label>
                    </div>
                    <div className="md:w-[220px] ">
                        <div className="relative">
                            <select className="block appearance-none w-full bg-white border hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" id="modul">
                            <option>Finnet</option>
                            <option>Other</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
                                <path d="M10 12l-6-6 1.41-1.41L10 9.17l4.59-4.58L16 6l-6 6z"/>
                            </svg>
                            </div>
                        </div>
                        {/* <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white " id="modul" type="text" value=""/> */}
                    </div>
                    </div>
                    <div className="md:flex md:items-center mb-4">
                    <div className="md:w-[200px]">
                        <label className=" text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="submodul">
                        Submodul Rekon 
                        </label>
                    </div>
                    <div className="md:w-[220px] ">
                        <div className="relative">
                            <select className="block appearance-none w-full bg-white border  hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" id="submodul">
                            <option>Tespripaid</option>
                            <option>Other</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
                                <path d="M10 12l-6-6 1.41-1.41L10 9.17l4.59-4.58L16 6l-6 6z"/>
                            </svg>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="md:flex md:items-center mb-4">
                    <div className="md:w-[200px]">
                        <label className=" text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="laporan">
                        Jenis Laporan 
                        </label>
                    </div>
                    <div className="md:w-[220px] ">
                        <div className="relative">
                            <select className="block appearance-none w-full bg-white border  hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" id="laporan">
                            <option>Harian</option>
                            <option>Bulanan</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
                                <path d="M10 12l-6-6 1.41-1.41L10 9.17l4.59-4.58L16 6l-6 6z"/>
                            </svg>
                            </div>
                        </div>
                    </div>
                    </div>

                    {/* import date */}
                    <div className="md:flex md:items-center mb-4">
                            <div className="md:w-[200px]">
                                <label className=" text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="submodul">
                                Report Date 
                                </label>
                            </div>
                            <div className="md:w-2/3 flex">
                                <input
                                type="date"
                                className="mt-1 py-2 px-4 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                />
                                <input
                                type="date"
                                className="mt-1 py-2 ml-3 px-4 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                    </div>

                    {/* button submit */}
                    <div className="md:flex md:items-start">
                    <div className="md:w-[200px]">
                        <button className="shadow bg-primary hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                        Submit
                        </button>
                    </div>
                    <div className="md:w-2/3 ">
                    <button className="shadow bg-btnExport hover:bg-green-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                        Export
                        </button>
                    </div>
                    </div>

                </form>  
            </div>

            <div className="mt-2 grid  bg-red-500 rounded-[20px]">
                    <div className="mb-auto text-center ">
                        <h2 className="text-lg font-bold">
                        Transaksi Nasabah Harian
                        </h2>
                        
                    </div>
            </div>
            <div className="mt-[100px] grid bg-black rounded-[20px]">
                <div className=" text-center text-white">
                    assaacdcdscds
                </div>
                
            </div>
    </div>
    );
}
Home.layout = page => <Layout children={page} />