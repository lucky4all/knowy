"use client"

import FormIcon from "@/components/Form-icon"
import SubmitButton from "@/components/Boton"
import { Account, Client } from "appwrite"
import { useState } from "react"


/* Appwrite client SDK */

const client = new Client()
    .setEndpoint("https://nyc.cloud.appwrite.io/v1")
    .setProject("68646645001889a895d0")

const account = new Account(client);

/* End of Appwrite client SDK */

export default function Login() {


    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();
        
        if (!mail || !password) {
            alert("Te faltan datos!");
            return;
        }
        const result = await account.createEmailPasswordSession(mail, password);
        console.info(result);
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="bg-white flex flex-col justify-center items-center gap-5 border-2 border-gray-200 shadow-xs shadow-gray-400 w-[40vw] h-[65vh] m-auto mt-[15vh] rounded-xl">
                <FormIcon />
                <label>Correo Electrónico</label>
                <input type="mail" placeholder="tu@ejemplo.com" onChange={(e) => setMail(e.target.value)} />
                <label>Contraseña</label>
                <input type="password" placeholder="*********" onChange={(e) => setPassword(e.target.value)}/>
                <SubmitButton contexto="Registrarse" />
            </form>
        </div>
    )
}