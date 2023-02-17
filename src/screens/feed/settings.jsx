import { useState, useEffect } from "react";
import Sidebar from "../../components/sidebar";
//tabs
import Basics from "./tabsSettings/basics";
import Account from './tabsSettings/account'
import EmailNotifications from './tabsSettings/emailNotifications'
import Memberships from './tabsSettings/memberships'
import Others from "./tabsSettings/others";
const Settings = () => {

    const [actualTab, setActualTab] = useState(<Basics />)
    const [tab, setTab] = useState("Basics")
    useEffect(() => {

    }, [actualTab])

    useEffect(() => {

    }, [tab])
    return (

        <div className="flex bg-slate-100">
            <Sidebar />
            <div className="min-h-screen flex flex-col justify-start items-center pt-10  xxs:pt-7 xsm:w-11/12 xsm:px-2">
                <div className="container-settings xxs:w-screen xsm:w-full  mxl:w-4/5 xl:w-3/5 3xl:w-3/6 4xl:w-5/12">
                    <h1 className="
                    font-bold text-3xl 
                    xxs:text-center xxs:pb-4

                    xxs:text-base xxs:self-center 
                    xsm:text-2xl xsm:text-start xsm:pl-6
                    xsm:pb-0 xsm:pt-6
                    md:pl-8 
                    tablet:pl-10
                    lg:text-3xl lg:pb-2
                    xl:text-3xl xl:self-center
                    ">Settings</h1>
                    <div className="tabs flex flex-row xxs:overflow-x-scroll xxs:w-screen xxs:justify-start xsm:w-full items-center xsm:pl-6 md:pl-8 tablet:pl-10">
                        <p className={`p-2 px-0 mx-6 xsm:ml-0 xxs:text-ellipsis xxs:whitespace-pre xxs:mx-4 text-sm hover:cursor-pointer ${(tab === "Basics") ? "text-violet-600 font-semibold border-b-2 border-violet-500" : ""}`} onClick={() => {
                            setActualTab(<Basics />)
                            setTab("Basics")
                        }}>Basics</p>
                        <p className={`p-2 px-0 mx-6 xxs:text-ellipsis xxs:whitespace-pre xxs:mx-4 text-sm hover:cursor-pointer ${(tab === "Account") ? " text-violet-600 font-semibold border-b-2 border-violet-500" : ""}`} onClick={() => {
                            setActualTab(<Account />)
                            setTab("Account")
                        }}>Account</p>
                        <p className={`p-2 px-0 mx-6 xxs:text-ellipsis xxs:whitespace-pre xxs:mx-4 text-sm hover:cursor-pointer ${(tab === "Email Notifications") ? "text-violet-600 font-semibold border-b-2 border-violet-500" : ""}`} onClick={() => {
                            setActualTab(<EmailNotifications />)
                            setTab("Email Notifications")
                        }}>Email notifications</p>

                    </div>
                    <div className="content-tab xxs:w-screen xsm:w-full xxs:my-6 xsm:mx-auto">
                        {actualTab}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings;