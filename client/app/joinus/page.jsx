"use client"
import { useEffect, useState } from "react"
import axios from "axios"
import SubmitButton from "@/components/Boton"
import FormIcon from "@/components/Form-icon"

export default function Prelog() {
    useEffect(() => {
        document.body.style.backgroundColor = "#f0f0f0"
    })

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();

        if (!name || !username || !email) {
            alert("Te faltan datos!");
            return;
        }

        const data = {
            name: name,
            username: username,
            email: email
        }

        let response = await axios.post("https://knowy.onrender.com/preauth", data);
        let parse = await response.data;
        console.log(parse);
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="bg-white flex flex-col justify-center items-center gap-5 border-2 border-gray-200 shadow-xs shadow-gray-400 w-[40vw] h-[65vh] m-auto mt-[15vh] rounded-xl">
                <Data />
                <label>Nombre completo</label>
                <input type="text" placeholder="John Doe" onChange={(e) => setName(e.target.value)} />
                <label>Nombre de usuario</label>
                <input type="text" placeholder="Pepitogrillo69" onChange={(e) => setUsername(e.target.value)} />
                <label>Correo electrónico</label>
                <input type="mail" placeholder="tu@ejemplo.com" onChange={(e) => setEmail(e.target.value)} />
                <SubmitButton contexto="Pre-registrarse" />
            </form>
        </div>
    )
}

export function Data() {
    return(
    <>
     <FormIcon></FormIcon>
      <p className="text-gray-500 text-center">Únete a nuestra comunidad. ¡Pre-regístrate ahora para obtener un <strong className="text-indigo-500">25%</strong> descuento en cursos online el dia de nuestro lanzamiento!</p>
    </>
)
} 
    
    