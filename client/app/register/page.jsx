export default function Register() {

    return (
        <main className="flex justify-center items-center mt-[20vh]">
            <form className="bg-blue-950 text-white font-bold flex flex-col w-[25vw] h-[50vh] rounded-2xl p-8 gap-4">
                <div className="flex flex-col gap-1">
                    <label htmlFor="Email" className="text-sm font-medium text-white">Email</label>
                    <input
                        type="email"
                        id="Email"
                        className="border rounded border-gray-300 shadow-sm sm:text-sm py-1 px-2 text-white"
                        name="email"
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