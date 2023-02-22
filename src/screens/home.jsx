import { AiOutlineSearch } from 'react-icons/ai';

import Header from '../components/header'
import Model from '../media/model.png'
import Footer from '../components/footer';
import '../App.css'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import "../components/header.css";


const Home = () => {
    const [loadPage, setLoadPage] = useState(false)

    let isDown = false;
    let startX;
    let scrollLeft;

    const handleMouseDown = (e) => {
        let pos = 0;
        const slider = document.querySelectorAll('.row-photos');
        if (e.target.parentNode.classList[1] === "two") {
            pos = 1;
        }
        if (e.target.parentNode.classList[1] === "three") {
            pos = 2;
        }

        console.log(slider[pos])

        isDown = true;
        slider[pos].classList.add('active');
        startX = e.pageX - slider[pos].offsetLeft;
        scrollLeft = slider[pos].scrollLeft;

    }

    const handleMouseLeave = (e) => {
        let pos = 0;
        const slider = document.querySelectorAll('.row-photos');
        if (e.target.parentNode.classList[1] === "two") {
            pos = 1;
        }
        if (e.target.parentNode.classList[1] === "three") {
            pos = 2;
        }

        isDown = false;
        slider[pos].classList.remove('active');
    }

    const handleMouseUp = (e) => {
        let pos = 0;
        const slider = document.querySelectorAll('.row-photos');
        if (e.target.parentNode.classList[1] === "two") {
            pos = 1;
        }
        if (e.target.parentNode.classList[1] === "three") {
            pos = 2;
        }
        isDown = false;
        slider[pos].classList.remove('active');
    }
    const handleMouseMove = (e) => {
        e.preventDefault();

        let pos = 0;
        const slider = document.querySelectorAll('.row-photos');
        if (e.target.parentNode.classList[1] === "two") {
            pos = 1;
        }
        if (e.target.parentNode.classList[1] === "three") {
            pos = 2;
        }

        if (!isDown) return;
        const x = e.pageX - slider[pos].offsetLeft;
        const walk = (x - startX) * 2;
        slider[pos].scrollLeft = scrollLeft - walk;
    }

    const handleLoad = () => {

        if (!loadPage) {
            const sliders = document.querySelectorAll(".row-photos")
            sliders.forEach((slider) => {
                let secondRandom = Math.floor(Math.random() * 10)

                slider.childNodes.forEach((slide) => {
                    slide.style.animation = `slider 3${secondRandom}s infinite linear`
                })
            })
            setLoadPage(true)
        }
    }
    return (
        <>
            <Header />
            <div
                className="container-home flex-col justify-center content-center mb-6 pt-14"
                onLoad={handleLoad}
            >
                <h1 className=' text-4xl text-center py-10 font-extrabold'>Tecno</h1>
                <div className="user flex flex-row items-center-icons justify-center">
                    {/* <div className="searchbar relative">
                    <div className="icon-search absolute top-3.5 left-5 scale-125">
                        <AiOutlineSearch />
                    </div>
                    <input type="text" className="py-3 px-14 pl-12 text-sm rounded-full bg-gray-100 outline-none border-none" name="search" id="search" placeholder='Encuentra a un creador' required />
                </div> */}
                    <Link to={'/login'} className="mx-2 px-7 py-3">
                        <button className="text-sm hover:underline">Iniciar Sesion</button>
                    </Link>
                    <Link to={'/register'} className="transition-all bg-red-500 border-white px-10 py-3 mx-2 rounded-full hover:bg-white hover:border-red-500 hover:border-2 text-white border-2 hover:text-red-500">
                        <button className="text-sm">Registrate</button>
                    </Link>

                </div>
                {/*<button className='bg-red-500 text-white py-3 px-8 rounded-full text-center'>Empezar</button>*/}
                <div className="gallery overflow-y-hidden overflow-x-scroll">

                    <div
                        className="row-photos one relative my-1 overflow-x-scroll overflow-y-hidden whitespace-nowrap will-change-transform cursor-pointer select-none scale-95"
                        onMouseDown={(e) => handleMouseDown(e)}
                        onMouseLeave={(e) => handleMouseLeave(e)}
                        onMouseUp={(e) => handleMouseUp(e)}
                        onMouseMove={(e) => handleMouseMove(e)}
                    >
                        <img className='slide inline-block px-1.5 rounded-lg xxs:h-24 md:h-36' src={Model} alt="" />
                        <img className='slide inline-block px-1.5 rounded-lg xxs:h-24 md:h-36' src={Model} alt="" />
                        <img className='slide inline-block px-1.5 rounded-lg xxs:h-24 md:h-36' src={Model} alt="" />
                        <img className='slide inline-block px-1.5 rounded-lg xxs:h-24 md:h-36' src={Model} alt="" />
                        <img className='slide inline-block px-1.5 rounded-lg xxs:h-24 md:h-36' src={Model} alt="" />
                        <img className='slide inline-block px-1.5 rounded-lg xxs:h-24 md:h-36' src={Model} alt="" />
                        <img className='slide inline-block px-1.5 rounded-lg xxs:h-24 md:h-36' src={Model} alt="" />
                        <img className='slide inline-block px-1.5 rounded-lg xxs:h-24 md:h-36' src={Model} alt="" />
                        <img className='slide inline-block px-1.5 rounded-lg xxs:h-24 md:h-36' src={Model} alt="" />
                        <img className='slide inline-block px-1.5 rounded-lg xxs:h-24 md:h-36' src={Model} alt="" />
                        <img className='slide inline-block px-1.5 rounded-lg xxs:h-24 md:h-36' src={Model} alt="" />
                        <img className='slide inline-block px-1.5 rounded-lg xxs:h-24 md:h-36' src={Model} alt="" />
                        <img className='slide inline-block px-1.5 rounded-lg xxs:h-24 md:h-36' src={Model} alt="" />
                        <img className='slide inline-block px-1.5 rounded-lg xxs:h-24 md:h-36' src={Model} alt="" />
                        <img className='slide inline-block px-1.5 rounded-lg xxs:h-24 md:h-36' src={Model} alt="" />
                    </div>

                    <div
                        className="row-photos two relative my-1 overflow-x-scroll overflow-y-hidden whitespace-nowrap will-change-transform cursor-pointer select-none scale-95"
                        onMouseDown={(e) => handleMouseDown(e)}
                        onMouseLeave={(e) => handleMouseLeave(e)}
                        onMouseUp={(e) => handleMouseUp(e)}
                        onMouseMove={(e) => handleMouseMove(e)}
                    >
                        <img className='slide inline-block px-1.5 rounded-lg xxs:h-24 md:h-36' src={Model} alt="" />
                        <img className='slide inline-block px-1.5 rounded-lg xxs:h-24 md:h-36' src={Model} alt="" />
                        <img className='slide inline-block px-1.5 rounded-lg xxs:h-24 md:h-36' src={Model} alt="" />
                        <img className='slide inline-block px-1.5 rounded-lg xxs:h-24 md:h-36' src={Model} alt="" />
                        <img className='slide inline-block px-1.5 rounded-lg xxs:h-24 md:h-36' src={Model} alt="" />
                        <img className='slide inline-block px-1.5 rounded-lg xxs:h-24 md:h-36' src={Model} alt="" />
                        <img className='slide inline-block px-1.5 rounded-lg xxs:h-24 md:h-36' src={Model} alt="" />
                        <img className='slide inline-block px-1.5 rounded-lg xxs:h-24 md:h-36' src={Model} alt="" />
                        <img className='slide inline-block px-1.5 rounded-lg xxs:h-24 md:h-36' src={Model} alt="" />
                        <img className='slide inline-block px-1.5 rounded-lg xxs:h-24 md:h-36' src={Model} alt="" />
                        <img className='slide inline-block px-1.5 rounded-lg xxs:h-24 md:h-36' src={Model} alt="" />
                        <img className='slide inline-block px-1.5 rounded-lg xxs:h-24 md:h-36' src={Model} alt="" />
                        <img className='slide inline-block px-1.5 rounded-lg xxs:h-24 md:h-36' src={Model} alt="" />
                        <img className='slide inline-block px-1.5 rounded-lg xxs:h-24 md:h-36' src={Model} alt="" />
                        <img className='slide inline-block px-1.5 rounded-lg xxs:h-24 md:h-36' src={Model} alt="" />
                    </div>

                    <div
                        className="row-photos three relative my-1 overflow-x-scroll overflow-y-hidden whitespace-nowrap will-change-transform cursor-pointer select-none scale-95"
                        onMouseDown={(e) => handleMouseDown(e)}
                        onMouseLeave={(e) => handleMouseLeave(e)}
                        onMouseUp={(e) => handleMouseUp(e)}
                        onMouseMove={(e) => handleMouseMove(e)}
                    >
                        <img className='slide inline-block px-1.5 rounded-lg xxs:h-24 md:h-36' src={Model} alt="" />
                        <img className='slide inline-block px-1.5 rounded-lg xxs:h-24 md:h-36' src={Model} alt="" />
                        <img className='slide inline-block px-1.5 rounded-lg xxs:h-24 md:h-36' src={Model} alt="" />
                        <img className='slide inline-block px-1.5 rounded-lg xxs:h-24 md:h-36' src={Model} alt="" />
                        <img className='slide inline-block px-1.5 rounded-lg xxs:h-24 md:h-36' src={Model} alt="" />
                        <img className='slide inline-block px-1.5 rounded-lg xxs:h-24 md:h-36' src={Model} alt="" />
                        <img className='slide inline-block px-1.5 rounded-lg xxs:h-24 md:h-36' src={Model} alt="" />
                        <img className='slide inline-block px-1.5 rounded-lg xxs:h-24 md:h-36' src={Model} alt="" />
                        <img className='slide inline-block px-1.5 rounded-lg xxs:h-24 md:h-36' src={Model} alt="" />
                        <img className='slide inline-block px-1.5 rounded-lg xxs:h-24 md:h-36' src={Model} alt="" />
                        <img className='slide inline-block px-1.5 rounded-lg xxs:h-24 md:h-36' src={Model} alt="" />
                        <img className='slide inline-block px-1.5 rounded-lg xxs:h-24 md:h-36' src={Model} alt="" />
                        <img className='slide inline-block px-1.5 rounded-lg xxs:h-24 md:h-36' src={Model} alt="" />
                        <img className='slide inline-block px-1.5 rounded-lg xxs:h-24 md:h-36' src={Model} alt="" />
                        <img className='slide inline-block px-1.5 rounded-lg xxs:h-24 md:h-36' src={Model} alt="" />
                    </div>

                </div>

                <h2 className='text-4xl text-center py-12 font-extrabold'>Lorem ipsum 250 000 personas.</h2>

                <div className="searchbar flex justify-center xxs:flex-col md:flex-row">
                    <div className="input relative mx-3">
                        <div className="icon-search absolute top-4 left-5">
                            <AiOutlineSearch />
                        </div>
                        <input type="text" className="  bg-gray-100 py-3 pl-12 outline-none rounded-full xxs:w-full md:w-96" placeholder='Descubre personas' />
                    </div>
                    <button className='bg-red-500 text-white py-3 px-8 rounded-full text-center mx-3 xxs:my-2'>Buscar</button>
                </div>

            </div>
            <Footer />
        </>
    )
}
export default Home;