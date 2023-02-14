

import { Link } from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai';

import Dropdown from 'react-bootstrap/Dropdown';


import "../App.css"
import { useState } from 'react';
const Header = () => {
    const [stateDropdown, setStateDropdown] = useState(false)
    const showDropdown = () => {
        stateDropdown ? setStateDropdown(false) : setStateDropdown(true)
    }
    return (
        <header className=' fixed w-full bg-white z-10 flex justify-between items-center p-2 shadow-sm'>
            <div className="menu-icon flex flex-row px-4">
                <div className="icon font-bold text-center">BP</div>
                <div className="menu-dropdown flex items-center mx-5">
                    {/*<div className=" transition-all relative item px-3 hover:cursor-pointer">
                        <p onClick={showDropdown}>Para creadores</p>
                        {stateDropdown &&
                            <div className=" w-60 py-1 absolute top-10 items-dropdown bg-white shadow-xl">
                                <p className='text-start p-4 hover:bg-blue-200'>Creadores de podcasts</p>
                                <p className='text-start p-4'>Creadores audiovisuales</p>
                                <p className='text-start p-4'>Musicos</p>
                                <p className='text-start p-4'>Artistas visuales</p>
                            </div>
                        }
                    </div>*/}
                    {/*<div className="item px-3">Precios</div>
                    <div className="item px-3">Recursos</div>*/}
                </div>

            </div>
            
        </header>
    )
}

export default Header;