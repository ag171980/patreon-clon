import imageCreators from '../media/find_creators.svg'

const FindCreators = () => {
    return (
        <div className=" bg-white p-3 flex flex-col items-center rounded-md lg:w-auto xxs:w-96" style={{ boxShadow: "0px 0px 2px 0px rgba(0,0,0,0.30)" }}>
            <p className='text-center pt-5'>Support or follow creators to see posts in your feed.</p>
            <button className=' bg-violet-500 text-white py-2 px-5 my-4 rounded-md text-sm'>Find creators you love</button>
            <img src={imageCreators} className=" h-64" alt="" />
        </div>
    )
}

export default FindCreators;