import { Link } from "react-router-dom";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "../App.css"
const Footer = () => {
    const languages = ["English (United States)", "Dansk", "Deutsch", "English (United Kingdom)", "Español (España)", "Español (Latinoamerica)", "Francais", "Italiano", "Nederlands", "Norsk (Bokmal)", "Polski", "Portugues (Brasil)", "Svenska", "Русский", "Українська", "日本語"]
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const showLanguages = () => {
        alert("Abriste el modal de lenguajes")
    }
    return (
        <footer className=" bg-black text-white px-36 xxs:px-0">
            <h2 className=" py-14 px-5 xl:w-4/5 xl:mx-auto 3xl:w-3/5">BP</h2>

            <Modal className="modal bg-white xxs:w-11/12 xxs:z-50 xxs:p-0 xxs:px-4" show={show} onHide={handleClose}>
                <Modal.Header className="flex flex-row justify-between items-center w-full" closeButton>
                    <Modal.Title className="xxs:text-xl font-bold">Choose your language</Modal.Title>
                    <Button className="px-2 py-2 text-slate-600" variant="secondary" onClick={handleClose}>
                        X
                    </Button>
                </Modal.Header>
                <Modal.Body className="grid grid-cols-3 xxs:grid-cols-1 xxs:overflow-y-scroll xxs:h-72 xxs:shadow-inner xxs:py-4 xxs:px-1 xxs:justify-center xxs:items-center">
                    {languages.map((lang) => <div className="lenguage border rounded-md p-4 my-1 flex justify-center items-center">
                        <p className="text-center xxs:text-base">{lang}</p>
                    </div>)}
                </Modal.Body>
                <Modal.Footer className="flex flex-row justify-end px-2 py-4">
                    <Button className=" px-4 py-2 text-red-500 bg-slate-100 rounded-full text-sm mx-2" variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button className=" px-4 py-2 bg-red-500 text-white rounded-full text-sm" variant="primary" onClick={handleClose}>
                        Save & update
                    </Button>
                </Modal.Footer>
            </Modal>


            <div className="footer-container flex justify-between pb-12 xxs:flex-col xxs:justify-center xxs:items-center xsm:items-start lg:flex-row xl:w-4/5 xl:mx-auto 3xl:w-3/5">
                <div className="footer-left flex flex-col justify-start xxs:w-full xxs:px-5 xsm:w-auto">
                    <button onClick={handleShow} className="p-3 w-44 rounded border my-1 xxs:w-full">Idioma: Espanol (Latinoamerica)</button>
                    <button className="p-3 w-44 rounded border my-1 text-start xxs:w-full">🇦🇷 Argentina</button>
                    <button className="p-3 w-44 rounded border my-1 text-start xxs:w-full">Divisa: USD</button>
                </div>
                <div className="footer-right w-full ml-44 xxs:grid xxs:ml-0 xxs:grid-cols-2 xxs:px-5 xxs:pt-7 md:flex md:flex-row lg:pt-0 xl:ml-32">
                    <div className="footer-column w-full my-2">
                        <h3 className="font-bold text-xs mb-6 uppercase">Producto</h3>
                        <div className="menu-footer flex flex-col">
                            <Link to="" className=" text-sm font-normal my-0.5 hover:underline">Basico</Link>
                            <Link to="" className=" text-sm font-normal my-0.5 hover:underline">Avanzado</Link>
                            <Link to="" className=" text-sm font-normal my-0.5 hover:underline">Premium</Link>
                            <Link to="" className=" text-sm font-normal my-0.5 hover:underline">Precios</Link>
                        </div>
                    </div>
                    <div className="footer-column w-full my-2">
                        <h3 className="font-bold text-xs mb-6 uppercase">Para creadores</h3>
                        <div className="menu-footer flex flex-col pr-1">
                            <Link to="" className=" text-sm font-normal my-0.5 hover:underline">Creadores de podcasts</Link>
                            <Link to="" className=" text-sm font-normal my-0.5 hover:underline">Creadores audiovisuales</Link>
                            <Link to="" className=" text-sm font-normal my-0.5 hover:underline">Musicos</Link>
                            <Link to="" className=" text-sm font-normal my-0.5 hover:underline">Artistas visuales</Link>
                            <Link to="" className=" text-sm font-normal my-0.5 hover:underline">Escritores y periodistas</Link>
                            <Link to="" className=" text-sm font-normal my-0.5 hover:underline">Comunidades</Link>
                            <Link to="" className=" text-sm font-normal my-0.5 hover:underline">Creadores de juegos</Link>
                            <Link to="" className=" text-sm font-normal my-0.5 hover:underline">Organizaciones sin animo de lucro</Link>
                            <Link to="" className=" text-sm font-normal my-0.5 hover:underline">Tutoriales y formaciones</Link>
                            <Link to="" className=" text-sm font-normal my-0.5 hover:underline">Empresas locales</Link>
                            <Link to="" className=" text-sm font-normal my-0.5 hover:underline">Creadores de todo tipo</Link>
                        </div>
                    </div>
                    <div className="footer-column w-full my-2 xxs:my-6 md:my-2">
                        <h3 className="font-bold text-xs mb-6 uppercase">Recursos</h3>
                        <div className="menu-footer flex flex-col">
                            <Link to="" className=" text-sm font-normal my-0.5 hover:underline">Blog</Link>
                            <Link to="" className=" text-sm font-normal my-0.5 hover:underline">Patreon U</Link>
                            <Link to="" className=" text-sm font-normal my-0.5 hover:underline">Comunidad de creadores</Link>
                            <Link to="" className=" text-sm font-normal my-0.5 hover:underline">Centro de ayuda y preguntas frecuentes</Link>
                            <Link to="" className=" text-sm font-normal my-0.5 hover:underline">Directorio de aplicaciones</Link>
                        </div>
                    </div>
                    <div className="footer-column w-full my-2 xxs:my-6 md:my-2">
                        <h3 className="font-bold text-xs mb-6 uppercase">Empresa</h3>
                        <div className="menu-footer flex flex-col">
                            <Link to="" className=" text-sm font-normal my-0.5 hover:underline">Acerca de</Link>
                            <Link to="" className=" text-sm font-normal my-0.5 hover:underline">Prensa</Link>
                            <Link to="" className=" text-sm font-normal my-0.5 hover:underline">Empleo</Link>
                            <Link to="" className=" text-sm font-normal my-0.5 hover:underline">Privacidad</Link>
                            <Link to="" className=" text-sm font-normal my-0.5 hover:underline">Politicas y condiciones</Link>
                            <Link to="" className=" text-sm font-normal my-0.5 hover:underline">Prefenrencias de la privacidad</Link>
                            <Link to="" className=" text-sm font-normal my-0.5 hover:underline">Accesibilidad</Link>
                            <Link to="" className=" text-sm font-normal my-0.5 hover:underline">Impressum</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;