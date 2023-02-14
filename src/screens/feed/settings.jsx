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
            <div className="w-full h-screen flex flex-col justify-start items-center xxs:pt-7 pt-10 bg-slate-100">
                <h1 className=" font-bold text-3xl xxs:text-base xxs:self-center xl:text-3xl xl:self-center">Settings</h1>
                <div className="tabs flex flex-row my-4 xs:overflow-x-scroll bg-red-500">
                    <p className={`p-2 px-0 mx-6 text-sm hover:cursor-pointer ${(tab === "Basics") ? "border-b-2 border-violet-500" : ""}`} onClick={() => {
                        setActualTab(<Basics />)
                        setTab("Basics")
                    }}>Basics</p>
                    <p className={`p-2 px-0 mx-6 text-sm hover:cursor-pointer ${(tab === "Account") ? "border-b-2 border-violet-500" : ""}`} onClick={() => {
                        setActualTab(<Account />)
                        setTab("Account")
                    }}>Account</p>
                    <p className={`p-2 px-0 mx-6 text-sm hover:cursor-pointer ${(tab === "Email Notifications") ? "border-b-2 border-violet-500" : ""}`} onClick={() => {
                        setActualTab(<EmailNotifications />)
                        setTab("Email Notifications")
                    }}>Email notifications</p>
                </div>
                <div className="content-tab">
                    {actualTab}
                </div>
            </div>
        </div>
    )
}

export default Settings;