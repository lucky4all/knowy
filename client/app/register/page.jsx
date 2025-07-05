"use client"
import axios from "axios";
import { useState } from "react"

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();
        const prepare = {
            email: email,
            username: username,
            password: password
        }
        try {
            const response = await axios.post("/api/auth/register", prepare);
            const data = await response.data

            if (response.status !== 201 ?? 200) {
                
            }
        } catch(er) {
            console.error(er)
        }

    }

    return (
        <main className="flex justify-center items-center mt-[20vh]">
            <form onSubmit={handleSubmit} className="bg-blue-950 text-white font-bold flex flex-col w-[25vw] h-[50vh] rounded-2xl p-8 gap-4">
                <div className="flex flex-col gap-1">
                    <label htmlFor="Email" className="text-sm font-medium text-white">Email</label>
                    <input
                        type="email"
                        id="Email"
                        className="border rounded border-gray-300 shadow-sm sm:text-sm py-1 px-2 text-white"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="Password" className="text-sm font-medium text-white">Contraseña</label>
                    <input
                        type="password"
                        id="Password"
                        className="border rounded border-gray-300 shadow-sm sm:text-sm py-1 px-2 text-white"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="username" className="text-sm font-medium text-white">Nombre de usuario</label>
                    <input
                        type="text"
                        id="username"
                        className="border rounded border-gray-300 shadow-sm sm:text-sm py-1 px-2 text-white"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="mt-4 bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 rounded cursor-pointer"
                >
                    Registrarse
                </button>
                <button className="bg-white text-blue-700 font-semibold py-2 rounded cursor-pointer">
                    Iniciar sesion
                </button>
            </form>
            
        </main>
        
    )
}