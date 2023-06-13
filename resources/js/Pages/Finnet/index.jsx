import React from 'react'
import Layout from '../../Components/Layout'

const index = () => {
  return (
    <div>
         {/* form submit */}
        <form className="mt-6 w-full max-w-2xl mb-4">

            <div className="md:items-center mb-4">
                <div className="md:w-[200px] mb-2">
                    <label className=" text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="submodul">
                    Report Date 
                    </label>
                </div>
                <div className="md:w-2/3 flex">
                    <input
                    type="date"
                    className="mt-1 py-2 px-4 block w-full border border-black rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                    <input
                    type="date"
                    className="mt-1 py-2 ml-3 px-4 block w-full border border-black rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                </div>
            </div>

            <div className="md:items-center flex mb-4">
                <div className="md:w-[220px] mb-2">
                    <label className='text-gray-500 font-bold md:text rigth mb-1 md:mb-0 pr-4' htmlFor="noresi">
                        Nomor Resi
                    </label>
                    <input
                    type="text"
                    className="mt-1 py-2 px-4 block w-full border border-black rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                </div>
                
                <div className="md:w-[220px] mb-2 ml-3 ">
                    <label className='text-gray-500 font-bold md:text rigth mb-1 md:mb-0 pr-4' htmlFor="noresi">
                        ID Pembayaran
                    </label>
                    <input
                    type="text"
                    className="mt-1 py-2 px-4 block w-full border border-black rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                </div>
            </div>

        <div className="md:flex md:items-start">
            <div className="md:w-[200px]">
                <button className="shadow bg-blue-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                Submit
                </button>
            </div>
            <div className="md:w-2/3 ">
            <button className="shadow bg-green-600 hover:bg-green-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                Export
                </button>
            </div>
        </div>
        </form>

        {/* Table BSI dan Finnet */}
        <div className="mt-2 grid bg-white rounded-[20px] py-5">
            
            <div className="mt-8 md:flex flex-row-reverse md:items-start">
                <div className="md:w-[150px]">
                    <button className="shadow bg-green-20 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                    Unmatchable
                    </button>
                </div>
                <div className="md:w-[150px]">
                    <button className="shadow bg-primary hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                    Matchable
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

index.layout = page => <Layout children={page} />
export default index
