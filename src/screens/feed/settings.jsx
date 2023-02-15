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

        <div className="flex">
            <Sidebar />
            <div className="w-full min-h-screen flex flex-col justify-start items-center xxs:pt-7 pt-10 bg-slate-100">
                <h1 className=" font-bold text-3xl xxs:text-base xxs:self-center xl:text-3xl xl:self-center">Settings</h1>
                <div className="tabs flex flex-row xxs:overflow-x-scroll xxs:w-screen xxs:justify-center items-center my-4">
                    <p className={`p-2 px-0 mx-6 xxs:text-ellipsis xxs:whitespace-pre xxs:mx-4 text-sm hover:cursor-pointer ${(tab === "Basics") ? "text-violet-600 font-semibold border-b-2 border-violet-500" : ""}`} onClick={() => {
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
                <div className="content-tab xxs:w-screen flex items-center justify-center">
                    {actualTab}
                </div>
            </div>
        </div>
    )
}

export default Settings;