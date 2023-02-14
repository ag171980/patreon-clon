import { useState, useMemo } from 'react'

import Select from 'react-select'
import countryList from 'react-select-country-list'
import { FaTrash } from 'react-icons/fa'
import ImgDemo from '../../../media/profile.jpg'

const Basics = () => {

    const [valueCountry, setValueCountry] = useState('')

    const options = useMemo(() => countryList().getData(), [])

    const changeHandler = value => {
        setValueCountry(value)
    }
    return (
        <div className="profile-info bg-white px-6 py-3 w-96 rounded-lg shadow-lg">
            <h1 className='text-xl font-semibold py-3'>Profile information</h1>
            <h3 className='font-semibold text-sm pl-2'>Profile</h3>
            <div className="profile flex flex-row items-center py-2">
                <img src={ImgDemo} className="h-14 w-14 object-cover rounded-full" alt="" />
                <button className='px-4 py-0 text-xs text-violet-800 bg-violet-100 rounded-lg font-semibold h-8 mx-3'>Upload Photo</button>
                <button className='bg-red-600 h-8 w-8 flex items-center justify-center text-xs rounded-md text-white'><FaTrash /></button>
            </div>
            <form className="edit-info flex flex-col items-center">
                <div className="input flex flex-col py-3">
                    <label htmlFor="display_name" className='font-semibold text-sm pb-2'>Display name</label>
                    <input type="text" className=' border px-4 py-2 w-80 rounded-lg' id="display_name" required />
                </div>
                <div className="input flex flex-col py-3">
                    <label htmlFor="email" className='font-semibold text-sm pb-2'>Email</label>
                    <input type="email" className=' border px-4 py-2 w-80 rounded-lg' id="email" required />
                </div>
                <div className="input">
                    <label htmlFor="country" className='font-semibold text-sm pb-2'>Country of Residence</label>
                    <Select className='w-80' options={options} valueCountry={valueCountry} onChange={changeHandler} />
                </div>
                <button className='py-2 px-4 my-2 mt-5 ml-2 bg-violet-400 self-start text-white rounded-lg text-sm font-semibold'>Save</button>
            </form>
        </div>
    )
}

export default Basics;