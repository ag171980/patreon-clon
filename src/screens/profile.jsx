import Sidebar from "../components/sidebar";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//media

import Cover from '../media/cover_photo.jpg'
import Photo from '../media/profile.jpg'

import "../App.css"
const Profile = () => {
    let { creatorName } = useParams();
    // const [scrollTop, setScrollTop] = useState(0)
    // window.onscroll = function () {
    //     const cover = document.querySelector(".cover")
    //     var scroll = document.documentElement.scrollTop || document.body.scrollTop;
    //     if (scroll >= 58) {
    //         cover.classList.add("cover-show")
    //     } else {
    //         cover.classList.remove("cover-show")
    //     }
    //     setScrollTop(scroll)
    // }

    // useEffect(() => {

    // }, [scrollTop])

    return (
        <div className="flex">
            <Sidebar />
            <div className="w-full flex flex-col justify-start items-center bg-slate-100">

                {window.innerWidth > 550 &&
                    <img src={Cover} className="w-screen h-72 bg-cover object-cover bg-top lg:h-72 tablet:h-56 md:h-44 xsm:h-36 xxs:h-24" alt="" />
                }
                {window.innerWidth <= 550 &&
                    <img src={Cover} className="w-screen h-72 bg-cover object-cover bg-top xxs:h-24 cover" alt="" />
                }


                <div className="info-creator">
                    <div className="data-creator relative flex flex-col items-center -top-12 xxs:-top-10">
                        <img src={Photo} className="h-20 w-20 object-cover rounded-full xxs:h-20 xxs:w-20 p-1 border border-gray-400" alt="" />
                        <h1 className="text-center pt-3 text-2xl font-semibold">{creatorName}</h1>
                        <p className="text-center text-md py-1 text-slate-500">Lorem ipsum dolor sit consectetur</p>
                    </div>
                    <h2 className="text-center pb-7 font-semibold text-3xl xxs:text-2xl xxs:pb-0 tablet:pb-7">Select a membership level</h2>
                    <div className="memberships flex justify-center m-auto tablet:flex-row tablet:items-start xxs:flex-col xxs:items-center">
                        <div className="membership bg-white mx-4 flex flex-col items-center px-5 py-2 rounded-lg shadow-md w-84 xl:w-80 mxl:w-60 xsm:w-80 xxs:w-96 xxs:my-5 md:w-96 tablet:w-64 lg:w-56">
                            <h3 className="text-center py-2 text-lg font-semibold pt-8 tablet:text-sm tablet:pt-7">Beans</h3>
                            <div className="price-image">
                                <img src={Cover} className=" h-36 w-72 object-cover xxs:h-20 xxs:w-44 xl:w-80 xl:h-36" alt="" />
                                <p className="price text-2xl font-semibold py-5 text-center xxs:text-2xl xxs:pt-4 xxs:py-0">$5 / month</p>
                            </div>
                            <button className="bg-blue-700 text-white w-72 py-3 rounded-md font-semibold text-sm xxs:my-3 xxs:w-72 xsm:w-64 md:w-80 tablet:w-52 lg:w-44 xs:w-80 mxl:w-52 xl:w-72">Join</button>

                            <p className="description-membership p-1 mt-6 xxs:mt-0 xxs:px-3 xxs:leading-5 tablet:px-2 lg:px-1 mxl:px-0">You can’t make coffee without the beans and we can’t make Drawfee without you wonderful folks! Your support truly means the world to us! Patrons at this tier will get access to the Official Drawfee Discord as well as News Posts here on Patreon to stay up to date on all things Drawfee.</p>
                            <ul className="benefits list-[circle] mx-5 mb-6 xxs:my-4 xxs:px-3">
                                <li className="text-slate-500 py-1 text-sm xxs:text-base">At least 1 JBP bonus video per month</li>
                                <li className="text-slate-500 py-1 text-sm xxs:text-base">Ad-Free video episodes of the JBP</li>
                                <li className="text-slate-500 py-1 text-sm xxs:text-base">Access to the patron-only chat community on Discord</li>
                            </ul>
                        </div>
                        <div className="most relative -top-3 tablet:my-8 xxs:my-5 tablet:-top-10 tablet:mx-3">
                            <p className="bg-blue-700 text-white text-center uppercase font-semibold text-sm py-1 rounded-t-xl rounded-b-none">You might like</p>
                            <div className="membership bg-white flex flex-col items-center px-6 py-2 rounded-lg rounded-t-none shadow-md border-2 border-blue-700 w-84 xl:w-80 mxl:w-60 xsm:w-80 xxs:w-96 md:w-96 tablet:w-64 lg:w-56">
                                <h3 className="text-center py-2 text-lg font-semibold pt-8 tablet:text-sm tablet:pt-7">Beans</h3>
                                <div className="price-image">
                                    <img src={Cover} className=" h-36 w-72 object-cover xxs:h-20 xxs:w-44 xl:w-80 xl:h-36" alt="" />
                                    <p className="price font-semibold py-5 text-center xxs:text-2xl xxs:pt-4 xxs:py-0">$5 / month</p>
                                </div>
                                <button className="bg-blue-700 text-white w-72 py-3 rounded-md font-semibold text-sm xxs:my-3 xxs:w-72 xsm:w-64 md:w-80 tablet:w-52 lg:w-44 xs:w-80 mxl:w-52 xl:w-72">Join</button>

                                <p className="description-membership p-1 mt-6 xxs:mt-0 xxs:px-3 xxs:leading-5 tablet:px-2 lg:px-1 mxl:px-0">You can’t make coffee without the beans and we can’t make Drawfee without you wonderful folks! Your support truly means the world to us! Patrons at this tier will get access to the Official Drawfee Discord as well as News Posts here on Patreon to stay up to date on all things Drawfee.</p>
                                <ul className="benefits list-[circle] mx-5 mb-6 xxs:my-4 xxs:px-3">
                                    <li className="text-slate-500 py-1 text-sm xxs:text-base">At least 1 JBP bonus video per month</li>
                                    <li className="text-slate-500 py-1 text-sm xxs:text-base">Ad-Free video episodes of the JBP</li>
                                    <li className="text-slate-500 py-1 text-sm xxs:text-base">Access to the patron-only chat community on Discord</li>
                                </ul>
                            </div>
                        </div>
                        <div className="membership bg-white mx-4 flex flex-col items-center px-5 py-2 rounded-lg shadow-md 2xl:w-84 xl:w-80 mxl:w-60 xsm:w-80 xxs:w-96 xxs:my-5 md:w-96 tablet:w-64 lg:w-56">
                            <h3 className="text-center py-2 text-lg font-semibold pt-8 tablet:text-sm tablet:pt-7">Beans</h3>
                            <div className="price-image">
                                <img src={Cover} className=" h-36 w-72 object-cover xxs:h-20 xxs:w-44 xl:w-80 xl:h-36" alt="" />
                                <p className="price text-2xl font-semibold py-5 text-center xxs:text-2xl xxs:pt-4 xxs:py-0">$5 / month</p>
                            </div>
                            <button className="bg-blue-700 text-white w-72 py-3 rounded-md font-semibold text-sm xxs:my-3 xxs:w-72 xsm:w-64 md:w-80 tablet:w-52 lg:w-44 xs:w-80 mxl:w-52 xl:w-72">Join</button>

                            <p className="description-membership p-1 mt-6 xxs:mt-0 xxs:px-3 xxs:leading-5 tablet:px-2 lg:px-1 mxl:px-0">You can’t make coffee without the beans and we can’t make Drawfee without you wonderful folks! Your support truly means the world to us! Patrons at this tier will get access to the Official Drawfee Discord as well as News Posts here on Patreon to stay up to date on all things Drawfee.</p>
                            <ul className="benefits list-[circle] mx-5 mb-6 xxs:my-4 xxs:px-3">
                                <li className="text-slate-500 py-1 text-sm xxs:text-base">At least 1 JBP bonus video per month</li>
                                <li className="text-slate-500 py-1 text-sm xxs:text-base">Ad-Free video episodes of the JBP</li>
                                <li className="text-slate-500 py-1 text-sm xxs:text-base">Access to the patron-only chat community on Discord</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <h1>Holaa, estas en el perfil de <span className="font-bold">{creatorName}</span></h1> */}
            </div>
        </div>
    )
}

export default Profile;