import { Link } from "react-router-dom";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "../App.css"
const Footer = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const showLanguages = () => {
        alert("Abriste el modal de lenguajes")
    }
    return (
        <footer className=" bg-black text-white px-36">
            <h2 className=" py-14">BP</h2>

            <Modal className="modal bg-white" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>


            <div className="footer-container flex flex-row justify-between pb-12">
                <div className="footer-left flex flex-col justify-start">
                    <button onClick={handleShow} className="p-3 w-44 rounded border my-1">Idioma: Espanol (Latinoamerica)</button>
                    <button className="p-3 w-44 rounded border my-1 text-start">🇦🇷 Argentina</button>
                    <button className="p-3 w-44 rounded border my-1 text-start">Divisa: USD</button>
                </div>
                <div className="footer-right flex flex-row w-full ml-44">
                    <div className="footer-column w-full">
                        <h3 className="font-bold text-xs mb-6 uppercase">Producto</h3>
                        <div className="menu-footer flex flex-col">
                            <Link to="" className=" text-sm font-normal my-1 hover:underline">Basico</Link>
                            <Link to="" className=" text-sm font-normal my-1 hover:underline">Avanzado</Link>
                            <Link to="" className=" text-sm font-normal my-1 hover:underline">Premium</Link>
                            <Link to="" className=" text-sm font-normal my-1 hover:underline">Precios</Link>
                        </div>
                    </div>
                    <div className="footer-column w-full mx-1">
                        <h3 className="font-bold text-xs mb-6 uppercase">Para creadores</h3>
                        <div className="menu-footer flex flex-col pr-1">
                            <Link to="" className=" text-sm font-normal my-1 hover:underline">Creadores de podcasts</Link>
                            <Link to="" className=" text-sm font-normal my-1 hover:underline">Creadores audiovisuales</Link>
                            <Link to="" className=" text-sm font-normal my-1 hover:underline">Musicos</Link>
                            <Link to="" className=" text-sm font-normal my-1 hover:underline">Artistas visuales</Link>
                            <Link to="" className=" text-sm font-normal my-1 hover:underline">Escritores y periodistas</Link>
                            <Link to="" className=" text-sm font-normal my-1 hover:underline">Comunidades</Link>
                            <Link to="" className=" text-sm font-normal my-1 hover:underline">Creadores de juegos</Link>
                            <Link to="" className=" text-sm font-normal my-1 hover:underline">Organizaciones sin animo de lucro</Link>
                            <Link to="" className=" text-sm font-normal my-1 hover:underline">Tutoriales y formaciones</Link>
                            <Link to="" className=" text-sm font-normal my-1 hover:underline">Empresas locales</Link>
                            <Link to="" className=" text-sm font-normal my-1 hover:underline">Creadores de todo tipo</Link>
                        </div>
                    </div>
                    <div className="footer-column w-full mx-1">
                        <h3 className="font-bold text-xs mb-6 uppercase">Recursos</h3>
                        <div className="menu-footer flex flex-col">
                            <Link to="" className=" text-sm font-normal my-1 hover:underline">Blog</Link>
                            <Link to="" className=" text-sm font-normal my-1 hover:underline">Patreon U</Link>
                            <Link to="" className=" text-sm font-normal my-1 hover:underline">Comunidad de creadores</Link>
                            <Link to="" className=" text-sm font-normal my-1 hover:underline">Centro de ayuda y preguntas frecuentes</Link>
                            <Link to="" className=" text-sm font-normal my-1 hover:underline">Directorio de aplicaciones</Link>
                        </div>
                    </div>
                    <div className="footer-column w-full mx-1">
                        <h3 className="font-bold text-xs mb-6 uppercase">Empresa</h3>
                        <div className="menu-footer flex flex-col">
                            <Link to="" className=" text-sm font-normal my-1 hover:underline">Acerca de</Link>
                            <Link to="" className=" text-sm font-normal my-1 hover:underline">Prensa</Link>
                            <Link to="" className=" text-sm font-normal my-1 hover:underline">Empleo</Link>
                            <Link to="" className=" text-sm font-normal my-1 hover:underline">Privacidad</Link>
                            <Link to="" className=" text-sm font-normal my-1 hover:underline">Politicas y condiciones</Link>
                            <Link to="" className=" text-sm font-normal my-1 hover:underline">Prefenrencias de la privacidad</Link>
                            <Link to="" className=" text-sm font-normal my-1 hover:underline">Accesibilidad</Link>
                            <Link to="" className=" text-sm font-normal my-1 hover:underline">Impressum</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;