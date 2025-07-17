"use client"

import FormIcon from "@/components/Form-icon"
import SubmitButton from "@/components/Boton"
import axios from "axios"
import { useState } from "react"

export default function Register() {
    const [mail, setMail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();
        const data = {
            username: name,
            email: mail,
            password: password
        }
        
        let response = await axios.post('/api/auth/register', data);
        let info = await response.data;
        console.log(info);
    }



    return (
        <div>
            <form onSubmit={handleSubmit} className="bg-white flex flex-col justify-center items-center gap-5 border-2 border-gray-200 shadow-xs shadow-gray-400 w-[40vw] h-[65vh] m-auto mt-[15vh] rounded-xl">
                <FormIcon />
                <label>Correo Electrónico</label>
                <input type="mail" placeholder="tu@ejemplo.com" onChange={(e) => setMail(e.target.value)} />
                <label>Nombre completo</label>
                <input type="text" placeholder="Lucas Coscia" onChange={(e) => setName(e.target.value)}/>
                <label>Contraseña</label>
                <input type="password" placeholder="tunombre@ejemplo.com" onChange={(e) => setPassword(e.target.value)}/>
                <SubmitButton contexto="Registrarse" />
            </form>
        </div>
    )
}