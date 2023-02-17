import { useState, useMemo } from 'react'

import Select from 'react-select'
import countryList from 'react-select-country-list'


import { BsFacebook, BsGoogle, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs'

const Account = () => {
    const [valueCountry, setValueCountry] = useState('United States')

    const options = useMemo(() => countryList().getData(), [])

    const changeHandler = value => {
        setValueCountry(value)
    }
    return (
        <>
            <div className="profile-info xxs:my-6 bg-white py-3 w-96 rounded-lg xxs:w-full xxs:px-4 xs:px-6 xsm:w-11/12 xsm:mx-auto">
                <h1 className='text-xl font-semibold py-3'>Login</h1>
                <form className="edit-info items-center w-auto">
                    <div className="input flex flex-col py-3">
                        <label htmlFor="password" className='font-semibold text-sm pb-2 xxs:pb-1'>Password</label>
                        <input type="password" className=' border px-4 py-3 w-full bg-gray-100 rounded-md border-gray-200 hover:border-gray-400 transition-all focus:bg-white focus:border-gray-600 outline-none' id="password" required />
                    </div>
                    <div className="input flex flex-col py-3 ">
                        <label htmlFor="confirmPassword" className='font-semibold text-sm pb-2 xxs:pb-1'>Confirm password</label>
                        <input type="password" className=' border px-4 py-3 w-full bg-gray-100 rounded-md border-gray-200 hover:border-gray-400 transition-all focus:bg-white focus:border-gray-600 outline-none' id="confirmPassword" required />
                    </div>
                    <button className='py-2 px-4 my-4 mt-6 self-start bg-slate-200 text-slate-600 rounded-lg font-semibold xxs:py-2 xxs:px-4 xxs:text-sm'>Set password</button>
                </form>
                <hr />
                <div className="connect-facebook flex flex-row justify-between items-center py-6">
                    <div className="text flex flex-row items-center justify-start">
                        <BsFacebook className='text-xl' />
                        <p className='text-sm px-5'>Log in with Facebook</p>
                    </div>
                    <div className="link">
                        <p className=' text-blue-300 text-sm'>Connect</p>
                    </div>
                </div>
                <hr />
                <div className="connect-google flex flex-row justify-between items-center py-6">
                    <div className="text flex flex-row items-center justify-start">
                        <BsGoogle className='text-xl' />
                        <p className='text-sm px-5'>Log in with Google</p>
                    </div>
                    <div className="link">
                        <p className=' text-blue-300 text-sm'>Disconnect</p>
                    </div>
                </div>
                <hr />
                <div className="two-factor py-6">
                    <p className='text-sm'>Two-factor authentication</p>
                    <div className="buttons-auth my-3">
                        <button className='bg-slate-200 text-slate-600 rounded-lg font-semibold xxs:py-2 xxs:px-4 xxs:text-sm xxs:mx-2 xxs:ml-0'>Use text message</button>
                        <button className='bg-slate-200 text-slate-600 rounded-lg font-semibold xxs:py-2 xxs:px-4 xxs:text-sm xxs:mx-2'>Use authenticator app</button>
                    </div>
                </div>
            </div>
            <div className="profile-info xxs:my-6 bg-white py-3 w-96 rounded-lg xxs:w-full xxs:px-4 xs:px-6 xsm:w-11/12 xsm:mx-auto">
                <h1 className='text-xl font-semibold py-3'>Shipping address</h1>
                <form className="edit-info items-center w-auto border my-3 px-6 py-5">
                    <div className="input">
                        <label htmlFor="country" className='text-sm xxs:pb-2'>Country</label>
                        <Select className=' rounded-lg w-full' options={options} valueCountry={valueCountry} onChange={changeHandler} />
                    </div>
                    <div className="input flex flex-col my-4 ">
                        <label htmlFor="fullName" className='text-sm xxs:pb-2'>Full Name</label>
                        <input type="text" className=' border px-4 py-3 w-full bg-gray-100 rounded-md border-gray-200 hover:border-gray-400 transition-all focus:bg-white focus:border-gray-600 outline-none' id="fullName" required />
                    </div>
                    <div className="inputs flex justify-between xxs:flex-col xsm:flex-row">
                        <div className="input flex flex-col my-2 xxs:w-full xsm:w-3/5">
                            <label htmlFor="address" className='text-sm xxs:pb-2'>Address</label>
                            <input type="text" className=' border px-4 py-3 w-full bg-gray-100 rounded-md border-gray-200 hover:border-gray-400 transition-all focus:bg-white focus:border-gray-600 outline-none' id="address" required />
                        </div>
                        <div className="input flex flex-col my-2 xxs:w-full xsm:w-2/6">
                            <label htmlFor="apt" className='text-sm xxs:pb-2'>Apt, suite, etc...</label>
                            <input type="text" className=' border px-4 py-3 w-full bg-gray-100 rounded-md border-gray-200 hover:border-gray-400 transition-all focus:bg-white focus:border-gray-600 outline-none' id="apt" required />
                        </div>
                    </div>
                    <div className="input flex flex-col my-2">
                        <label htmlFor="city" className='text-sm xxs:pb-2'>City</label>
                        <input type="text" className=' border px-4 py-3 w-full bg-gray-100 rounded-md border-gray-200 hover:border-gray-400 transition-all focus:bg-white focus:border-gray-600 outline-none' id="city" required />
                    </div>
                    <div className="inputs flex justify-between xxs:flex-col xsm:flex-row">
                        <div className="input flex flex-col my-2 xxs:w-full xsm:w-3/6 xxs:m-0 xsm:mr-4">
                            <label htmlFor="province" className='text-sm xxs:pb-2'>State/Province</label>
                            <input type="text" className=' border px-4 py-3 w-full bg-gray-100 rounded-md border-gray-200 hover:border-gray-400 transition-all focus:bg-white focus:border-gray-600 outline-none' id="province" required />
                        </div>
                        <div className="input flex flex-col my-2 xxs:w-full xsm:w-3/6 xxs:m-0 xsm:ml-4">
                            <label htmlFor="postalCode" className='text-sm xxs:pb-2'>Postal Code</label>
                            <input type="text" className=' border px-4 py-3 w-full bg-gray-100 rounded-md border-gray-200 hover:border-gray-400 transition-all focus:bg-white focus:border-gray-600 outline-none' id="postalCode" required />
                        </div>
                    </div>
                    <div className="input my-2">
                        <label htmlFor="phoneNumber" className='text-sm xxs:pb-2'>Phone Number</label>
                        <input type="number" className=' border px-4 py-2 w-full bg-gray-100 rounded-md border-gray-200 hover:border-gray-400 transition-all focus:bg-white focus:border-gray-600 outline-none' id="phoneNumber" required />
                    </div>
                    <hr />
                    <div className="bg flex justify-end">
                        <button className='py-2 px-4 mt-4 self-end bg-blue-800 text-white rounded-lg font-semibold xxs:py-2 xxs:px-4 xxs:text-xs'>Add address</button>
                    </div>
                </form>

            </div>
            <div className="profile-info xxs:my-6 bg-white py-3 w-96 rounded-lg xxs:w-full xxs:px-4 xs:px-6 xsm:w-11/12 xsm:mx-auto">
                <h1 className='text-xl font-semibold py-3'>Social links</h1>
                <p className='text-xs text-gray-500'>You can display the connected social media accounts on your profile.</p>

                <div className="socials pt-4">
                    <div className="social flex flex-row justify-between py-2">
                        <div className="content flex flex-row justify-start">
                            <BsFacebook className='text-xl' />
                            <p className='mx-4 text-sm'>Facebook</p>
                        </div>
                        <button className='border border-gray-400 rounded-md text-xs px-3 py-2 font-semibold hover:cursor-pointer'>Connect</button>
                    </div>
                    <div className="social flex flex-row justify-between py-2">
                        <div className="content flex flex-row justify-start">
                            <BsInstagram className='text-xl' />
                            <p className='mx-4 text-sm'>Instagram</p>
                        </div>
                        <button className='border border-gray-400 rounded-md text-xs px-3 py-2 font-semibold hover:cursor-pointer'>Connect</button>
                    </div>
                    <div className="social flex flex-row justify-between py-2">
                        <div className="content flex flex-row justify-start">
                            <BsTwitter className='text-xl' />
                            <p className='mx-4 text-sm'>Twitter</p>
                        </div>
                        <button className='border border-gray-400 rounded-md text-xs px-3 py-2 font-semibold hover:cursor-pointer'>Connect</button>
                    </div>
                    <div className="social flex flex-row justify-between py-2">
                        <div className="content flex flex-row justify-start">
                            <BsYoutube className='text-xl' />
                            <p className='mx-4 text-sm'>Youtube</p>
                        </div>
                        <button className='border border-gray-400 rounded-md text-xs px-3 py-2 font-semibold hover:cursor-pointer'>Connect</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Account;
