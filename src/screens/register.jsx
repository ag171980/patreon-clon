import { useState } from "react";

import { Link } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc'
import { AiFillEye } from 'react-icons/ai'
import { TbForbid2 } from 'react-icons/tb'
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from 'formik';

import "../App.css"
const Register = () => {
    const [nombre, setNombre] = useState(undefined);
    const [email, setEmail] = useState(undefined);
    const [password, setPassword] = useState(undefined);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        const dataRegister = {
            nombre: nombre,
            email: email,
            pass: password
        }
        alert(JSON.stringify(dataRegister))
        navigate("/");
    }
    return (
        <div className="Registe pt-12 w-96 mx-auto">
            <h1 className=" text-black text-center text-3xl">Hazte creador en Lorem</h1>
            <p className="text-center py-2 text-gray-500 text-sm">No eres un creador? <Link to={'/register'} className=" transition-all text-blue-700 hover:text-blue-900">Registrate aqui</Link></p>
            <div className="buttons flex flex-col items-center py-5">
                <button className=" w-96 transition-all border flex flex-row items-center justify-center p-3 px-5 m-1 rounded-md font-normal text-sm border-slate-200 hover:border-slate-300"><FcGoogle className="mx-4" /> Registrate con Google</button>
                <button className=" w-96 transition-all border flex flex-row items-center justify-center p-3 px-5 m-1 rounded-md font-normal text-sm border-slate-200 hover:border-slate-300"><FcGoogle className="mx-4" /> Registrate con Google</button>
            </div>
            <div className="other-option relative ">
                <hr />
                <p className=" absolute -top-5 left-14 mt-2 px-4 text-gray-400 bg-white text-sm">o registrate con un correo electronico</p>
            </div>
            <Formik
                initialValues={{ name: undefined, email: undefined, password: undefined }}
                validate={values => {
                    const errors = {
                    };

                    if (values.email !== undefined) {
                        setEmail(values.email)
                        if (!values.email) {
                            errors.email = 'El email es obligatorio';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                            errors.email = 'Direccion de email no valida';
                        }
                    }
                    if (values.password !== undefined) {
                        setPassword(values.password)
                        if (values.password.length < 6) {
                            errors.password = (values.password.length === 0) ? 'La contraseña es obligatoria' : 'La contraseña debe tener al menos 6 caracteres'
                        } else {
                            errors.password = ""
                        }

                    }
                    if (values.name !== undefined) {
                        setNombre(values.name)
                        errors.name = (values.name.length !== 0) ? "" : "El nombre es obligatorio"
                    }
                    return errors;
                }}

            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <Form onSubmit={handleSubmit} className="my-8">
                        <div className="input my-2">
                            <Field
                                type="text"
                                className={(nombre !== undefined && nombre.length === 0) ? 'p-2 px-3  text-sm w-96 rounded-md bg-red-100' : 'p-2 px-3  text-sm w-96 rounded-md bg-blue-100'}
                                name="name"
                                id="name"
                                placeholder="Nombre"
                                required
                            />
                            {errors.name && errors.name !== undefined &&
                                <p className=" text-red-600 flex flex-row items-center text-xs py-1"><TbForbid2 className="mr-2" /> {errors.name}</p>
                            }
                        </div>
                        <div className="input my-2">
                            <Field
                                type="email"
                                className={(email !== undefined && email.length === 0) ? 'p-2 px-3  text-sm w-96 rounded-md bg-red-100' : 'p-2 px-3  text-sm w-96 rounded-md bg-blue-100'}
                                name="email"
                                id="email"
                                placeholder="Email"
                                required
                            />
                            {errors.email && errors.email !== undefined &&
                                <p className=" text-red-600 flex flex-row items-center text-xs py-1"><TbForbid2 className="mr-2" /> {errors.email}</p>
                            }
                        </div>

                        <div className="input my-2 relative">
                            <Field type="password" className={(password !== undefined && password.length < 6) ? 'p-2 px-3  text-sm w-96 rounded-md bg-red-100' : 'p-2 px-3  text-sm w-96 rounded-md bg-blue-100'} name="password" id="password" placeholder="Contraseña" required />
                            {errors.password && errors.password !== undefined &&
                                <p className=" text-red-600 flex flex-row items-center text-xs py-1"><TbForbid2 className="mr-2" /> {errors.password}</p>
                            }
                        </div>
                        <button type="submit" className="mt-8 mx-auto bg-cyan-700 text-white w-96 py-2 px-3 rounded-lg text-sm" disabled={isSubmitting}>
                            Registrarse
                        </button>
                        <p className="text-center text-sm my-3 text-gray-500">Al registrarte aceptas los <span className="text-blue-500">Terminos de uso</span>, la <span className="text-blue-500">Politica de Privacidad</span> y la <span className="text-blue-500">Politica de Cookies</span> de Lorem.</p>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Register;