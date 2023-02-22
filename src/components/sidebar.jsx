
import { TbLayoutNavbar } from 'react-icons/tb'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineExplore } from 'react-icons/md'
import { HiOutlineMail } from 'react-icons/hi'
import { IoSettingsOutline } from 'react-icons/io5'
import { FaTimes } from 'react-icons/fa'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import Profile from '../media/profile.png'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


const Sidebar = () => {
    const [stateDropdown, setStateDropdown] = useState(false)
    const [modalMobile, setModalMobile] = useState(window.innerWidth > 550)
    const showDropdown = () => {
        setStateDropdown(!stateDropdown)
    }
    const closeMenu = () => {
        setModalMobile(!modalMobile)
    }

    return (
        <>
            <div className='h-screen relative
            xss:w-0 xxs:h-0 xxs:hidden 
            lg:w-72
            xsm:w-16 xsm:px-4 xsm:h-screen xsm:flex'></div>
            {
                window.innerWidth <= 550 &&
                <div className="menu-hamburguer xxs:absolute xxs:top-5 xxs:left-3 xxs:p-3" onClick={() => closeMenu()}>
                    <GiHamburgerMenu />
                </div>
            }
            {
                modalMobile &&
                <div className='h-screen fixed z-40 bg-white border-x flex flex-col items-center xxs:w-screen xsm:py-5 xsm:w-16 xsm:h-full lg:w-60'>

                    <div className="logo font-bold text-violet-600 lg:px-7 lg:self-start xsm:px-0 xsm:self-center xxs:self-start xxs:px-5 xxs:pt-4">BP</div>
                    {
                        window.innerWidth <= 550 &&
                        <div className="closeModal absolute right-4 top-5" onClick={() => closeMenu()}>
                            <FaTimes />
                        </div>
                    }
                    <div className="menu-feed my-6">
                        <Link to="/feed" className="item-menu xxs:w-screen mx-3 xxs:items-center xxs:flex xxs:h-12 xxs:px-5 xsm:h-10 xsm:w-10 xsm:items-center xsm:justify-center xsm:my-2 xsm:p-0 lg:h-auto lg:w-52 lg:justify-start lg:p-3 lg:my-1 hover:bg-slate-100 hover:cursor-pointer rounded-md">
                            <TbLayoutNavbar className='xs:text-xl lg:text-md' />
                            <p className='text-md mx-2 xxs:block xsm:hidden lg:block'>Feed</p>
                        </Link>
                        <Link to="/searchCreators" className="item-menu xxs:w-screen mx-3 xxs:items-center xxs:flex xxs:h-12 xxs:px-5 xsm:h-10 xsm:w-10 xsm:items-center xsm:justify-center xsm:my-2 xsm:p-0 lg:h-auto lg:w-52 lg:justify-start lg:p-3 lg:my-1 hover:bg-slate-100 hover:cursor-pointer rounded-md">
                            <MdOutlineExplore className='xs:text-xl lg:text-md' />
                            <p className='text-md mx-2 xxs:block xsm:hidden lg:block'>Find creators</p>
                        </Link>
                        <Link to="/messages" className="item-menu xxs:w-screen mx-3 xxs:items-center xxs:flex xxs:h-12 xxs:px-5 xsm:h-10 xsm:w-10 xsm:items-center xsm:justify-center xsm:my-2 xsm:p-0 lg:h-auto lg:w-52 lg:justify-start lg:p-3 lg:my-1 hover:bg-slate-100 hover:cursor-pointer rounded-md">
                            <HiOutlineMail className='xs:text-xl lg:text-md' />
                            <p className='text-md mx-2 xxs:block xsm:hidden lg:block'>Messages</p>
                        </Link>
                        <Link to="/settings" className="item-menu xxs:w-screen mx-3 xxs:items-center xxs:flex xxs:h-12 xxs:px-5 xsm:h-10 xsm:w-10 xsm:items-center xsm:justify-center xsm:my-2 xsm:p-0 lg:h-auto lg:w-52 lg:justify-start lg:p-3 lg:my-1 hover:bg-slate-100 hover:cursor-pointer rounded-md">
                            <IoSettingsOutline className='xs:text-xl lg:text-md' />
                            <p className='text-md mx-2 xxs:block xsm:hidden lg:block'>Settings</p>
                        </Link>
                    </div>

                    <div onClick={showDropdown} className="bottom-sidebar absolute bottom-0 p-3 flex w-full justify-between items-center">
                        <div className="user-data flex">
                            <img src={Profile} className="h-9 rounded" alt="" />
                            <div className="description-profile mx-2  xsm:hidden lg:block">
                                <h4 className='font-bold text-sm'>Nicolas G</h4>
                                <p className='role' style={{ fontSize: "12px" }}>Patron</p>
                            </div>
                        </div>
                        <div className="dots relative">
                            <BiDotsVerticalRounded className=' hover:cursor-pointer hover:bg-slate-200 hover:border-slate-400 text-md p-2 h-9 w-9 rounded-full xsm:hidden lg:block' />
                            {stateDropdown &&
                                <div className="dropdown-profile absolute w-56 p-3 right-0 bottom-12 rounded-md xs:-left-10 bg-white" style={{ boxShadow: "0px 0px 4px 0px rgba(0,0,0,0.3)" }}>
                                    <p className='py-1'>Lorem ipsum 1</p>
                                    <p className='py-1 pb-4'>Lorem ipsum 1</p>
                                    <hr />
                                    <p className='pt-2'>Log out</p>
                                </div>}
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Sidebar;