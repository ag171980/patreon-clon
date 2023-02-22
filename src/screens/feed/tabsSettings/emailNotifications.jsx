const EmailNotifications = () => {
    return (<div className="profile-info bg-white py-3 w-96 rounded-lg xxs:w-full xxs:px-4 xs:px-6 xsm:w-11/12 xsm:mx-auto">
        <h1 className='text-xl font-semibold py-3'>Announcements and resources</h1>
        <div className="product-updates flex flex-row justify-between my-5">
            <p>Product updates and community announcements</p>
            <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
            </label>
        </div>
        <hr />
        <div className="patron-newsletter flex flex-row justify-between my-5">
            <p>Patron newsletter</p>
            <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
            </label>
        </div>

    </div>)
}

export default EmailNotifications;