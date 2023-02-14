import Sidebar from "../../components/sidebar";

import { AiOutlineSearch } from 'react-icons/ai'
import { FaTimes } from 'react-icons/fa'
import { IoFilterSharp } from 'react-icons/io5'

import NotMessages from '../../media/not_messages.svg'

const Messages = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className=" h-screen w-full flex flex-col items-start xxs:pt-7 pt-10 bg-slate-100 px-20 xxs:px-8">
                <h1 className="font-bold py-4 xs:text-xl xs:text-center xs:mx-auto xs:relative xs:-top-4 lg:top-0 lg:mx-0 lg:text-3xl">Messages</h1>
                <div className="container-messages flex  w-full xxs:flex-col lg:flex-row lg:justify-between lg:items-start xxs:items-center">
                    <div className="container-left flex flex-col items-center lg:items-start xxs:p-4 xxs:w-full lg:w-1/2">
                        <div className="container-searchbar flex items-center xxs:w-full">
                            <div className="input relative xxs:mx-auto xxs:w-full">
                                <AiOutlineSearch className="absolute top-3 left-3" />
                                <input className=" bg-slate-200 px-8 py-2 pl-10 rounded-md text-sm asd xxs:w-96 xs:py-3 xs:w-full xxs:self-center" type="text" name="name_creator" placeholder="Find a creator" onChange={(e) => setCreatorToSearch(e.target.value)} required />
                            </div>
                            <button className="p-3 rounded-xl border text-slate-600 bg-slate-200 ml-4 sm:relative sm:top-0 sm:right-0 xxs:absolute xxs:top-5 xxs:right-3"><IoFilterSharp /></button>
                        </div>
                        <div className="notMessages flex items-center lg:flex-col">
                            <p className="text-sm text-slate-500 lg:py-3">
                                Send a message to your creators to share your love
                            </p>
                            <img src={NotMessages} className="h-28 px-4 lg:h-24" alt="" />
                        </div>
                    </div>
                    <div className="container-right w-1/2 bg-white rounded-md xxs:hidden lg:flex lg:flex-col xxs:w-full lg:w-1/2">
                        <div className="head-chat">
                            <h2 className=" text-xl font-semibold p-3">Lorem ips</h2>
                            <hr />
                        </div>
                        <div className="body-chat h-80"></div>
                        <hr />
                        <div className="functions-chat w-full p-4 flex">
                            <input className=" w-5/6 border border-slate-300 rounded-md text-sm px-4 mr-4" type="text" placeholder="Write a message..." />
                            <button className=" w-1/6 bg-slate-200 text-slate-500 font-semibold py-2 px-4 rounded-md text-center mx-auto">Send</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Messages;