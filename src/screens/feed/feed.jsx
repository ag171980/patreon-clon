import Sidebar from "../../components/sidebar";
import FindCreators from "../../components/findCreators";
import { IoFilterSharp } from 'react-icons/io5'
import { useState } from "react";
const Feed = () => {

    const [stateDropdownFilter, setStateDropdownFilter] = useState(false)

    const showDropdownFilter = () => {
        setStateDropdownFilter(!stateDropdownFilter)
    }
    return (
        <div className="flex">
            <Sidebar />
            <div className="w-full h-screen flex justify-center items-center bg-slate-100">
                <div className="container-feed flex flex-col">
                    <div className="top-feed flex items-center justify-between pb-7">
                        <h1 className="font-bold text-3xl 
                        xxs:text-lg xxs:text-center xxs:self-center xxs:mx-auto 
                        lg:text-3xl
                        sm:self-start sm:mx-0 ">Feed</h1>
                        <div className="filter relative">
                            <button onClick={() => showDropdownFilter()} className=" hover:cursor-pointer p-3 rounded-xl border-gray-300 border bg-white ml-4 sm:relative sm:top-0 sm:right-0 xxs:absolute xxs:-top-5 xxs:right-0"><IoFilterSharp /></button>
                            {stateDropdownFilter &&
                                <div className="filter-list bg-white w-72 p-4 absolute right-0 top-7 shadow-lg rounded-lg">
                                    <h3 className="pb-4 uppercase text-gray-600">Filter</h3>
                                    <div className="options">
                                        <p className="py-2 text-sm">All Posts</p>
                                        <p className="py-2 text-sm">Patron-only posts</p>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                    <FindCreators />
                </div>
            </div>
        </div>
    )
}
export default Feed;