import { useState } from "react";

import { Link } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc'
import { AiFillEye } from 'react-icons/ai'
import { TbForbid2 } from 'react-icons/tb'
import { useNavigate } from "react-router-dom";

import { Formik, Form, Field } from 'formik';

import "../App.css"

const Login = () => {
    const [email, setEmail] = useState(undefined);
    const [password, setPassword] = useState(undefined);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        const dataLogin = {
            email: email,
            pass: password
        }
        alert(JSON.stringify(dataLogin))
        navigate("/");
    }
    return (
        <div className="Login pt-12 w-96 mx-auto">
            <h1 className=" text-black text-center text-3xl">Inicia sesion en Lorem</h1>
            <div className="buttons flex flex-col items-center py-5">
                <button className=" w-96 transition-all border flex flex-row items-center justify-center p-3 px-5 m-1 rounded-md font-normal text-sm border-slate-200 hover:border-slate-300"><FcGoogle className="mx-4" /> Continua con Google</button>
                <button className=" w-96 transition-all border flex flex-row items-center justify-center p-3 px-5 m-1 rounded-md font-normal text-sm border-slate-200 hover:border-slate-300"><FcGoogle className="mx-4" /> Continua con Google</button>
                <button className=" w-96 transition-all border flex flex-row items-center justify-center p-3 px-5 m-1 rounded-md font-normal text-sm border-slate-200 hover:border-slate-300"><FcGoogle className="mx-4" /> Continua con Google</button>
            </div>
            <div className="other-option relative ">
                <hr />
                <p className=" absolute -top-5 left-24 mt-2 px-4 text-gray-400 bg-white text-sm">o continua con un email</p>
            </div>

            <Formik
                initialValues={{
                    email: undefined, password: undefined
                }}
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
                    return errors;
                }}
            >
                {({
                    errors,
                    isSubmitting,
                }) => (
                    <Form onSubmit={handleSubmit} className="my-8">
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
                        <div className="input my-2">
                            <Field
                                type="password"
                                className={(password !== undefined && password.length < 6) ? 'p-2 px-3  text-sm w-96 rounded-md bg-red-100' : 'p-2 px-3  text-sm w-96 rounded-md bg-blue-100'}
                                name="password"
                                id="password"
                                placeholder="Contraseña"
                                required
                            />
                            {errors.password && errors.password !== undefined &&
                                <p className=" text-red-600 flex flex-row items-center text-xs py-1"><TbForbid2 className="mr-2" /> {errors.password}</p>
                            }
                        </div>
                        <button type="submit" className="mt-8 mx-auto bg-cyan-700 text-white w-96 py-2 px-3 rounded-lg text-sm" disabled={isSubmitting}>
                            Iniciar Sesion
                        </button>
                        <p className="text-center text-sm my-3 text-gray-500">No estas en Lorem? <Link to={'/register'} className="text-blue-700">Registrate</Link> </p>
                    </Form>
                )}
            </Formik>

        </div >
    )
}

export default Login;
