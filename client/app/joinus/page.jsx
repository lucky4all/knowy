"use client"
import { useEffect } from "react"

export default function Prelog() {
    useEffect(() => {
        document.body.style.backgroundColor = "#f0f0f0"
    })
    return (
        <div>
            <form className="bg-white flex flex-col justify-center items-center gap-5 border-2 border-gray-200 w-[40vw] h-[65vh] m-auto mt-[15vh] rounded-xl">
                <h1 className="text-sky-600 text-5xl font-bold">Knowy</h1>
                <p className="text-gray-500 text-center">Únete a nuestra comunidad. ¡Pre-regístrate ahora para obtener un <strong className="text-indigo-500">25%</strong> descuento en cursos online el dia de nuestro lanzamiento!</p>
                <label>Nombre completo</label>
                <input type="text" placeholder="John Doe" />
                <label>Nombre de usuario</label>
                <input type="text" placeholder="Pepitogrillo69" />
                <label>Correo electrónico</label>
                <input type="mail" placeholder="tu@ejemplo.com" />
                <button className="bg-indigo-600 rounded-xs mt-5 py-3 px-2.5 text-[17px] cursor-pointer hover:bg-indigo-500 transition-colors text-white w-[35%]" type="submit">Pre-regístrate ahora</button>
            </form>
        </div>
    )
}