"use client"

import FormIcon from "@/components/Form-icon"
import SubmitButton from "@/components/Boton"
import Load from "@/components/Load"
import { ErrorAlert, ErrorMessage } from "@/components/Error"
import axios from "axios"
import { useState } from "react"

export default function Register() {
    const [mail, setMail] = useState('');
    const [username, setName] = useState('');
    const [password, setPassword] = useState('');

    const [renderMail, setRenderMail] = useState(false);
    const [renderName, setRenderName] = useState(false);
    const [renderPassword, setRenderPassword] = useState(false);

    const [renderLoad, setRenderLoad] = useState(false);
    const [renderError, setRenderError] = useState(false);

    async function handleSubmit(event) {
        event.preventDefault();

        let hasError = false;
        if (!mail) {
            setRenderMail(true);
            hasError = true;
        } else {
            setRenderMail(false);
        }
        if (!username) {
            setRenderName(true);
            hasError = true;
        } else {
            setRenderName(false);
        }
        if (!password) {
            setRenderPassword(true);
            hasError = true;
        } else {
            setRenderPassword(false);
        }
        if (hasError) return;

        const data = {
            username: username,
            email: mail,
            password: password
        }

        setRenderLoad(true);

        try {
           let response = await axios.post('/api/auth/register', data);
           let info = await response.data;
        } catch(er) {
            setRenderError(true);
        }
    }

    return (
        <div>

            <form onSubmit={handleSubmit} className="bg-white flex flex-col justify-center items-center gap-5 border-2 border-gray-200 shadow-xs shadow-gray-400 w-[40vw] h-[65vh] m-auto mt-[15vh] rounded-xl overflow-auto">
                <FormIcon />
                <label>Correo Electrónico</label>
                <input type="mail" placeholder="tu@ejemplo.com" onChange={(e) => setMail(e.target.value)} />
                {renderMail && (
                    <ErrorMessage />
                )}
                <label>Nombre completo</label>
                <input type="text" placeholder="Lucas Coscia" onChange={(e) => setName(e.target.value)}/>
                 {renderName && (
                    <ErrorMessage />
                )}
                <label>Contraseña</label>
                <input type="password" placeholder="*********" onChange={(e) => setPassword(e.target.value)}/>
                 {renderPassword && (
                    <ErrorMessage />
                )}
                {renderLoad && (
                    <Load />
                )}
                {renderError && (
                    <ErrorAlert />
                )}
                <SubmitButton contexto="Registrarse" />
            </form>
        </div>
    )
}