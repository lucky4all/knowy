import Image from "next/image"
import Link from "next/link"
import { Sarabun } from "next/font/google"

const dosis = Sarabun({
    weight: "500",
    subsets: ['latin']
})

export default function AlterNav() {
    return (
        <header className="shadow-xl bg-blue-500 shadow-blue-800 h-[8vh]">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <div className="flex-1 md:flex md:items-center md:gap-12">
                        <Link className="block text-teal-600" href="/" prefetch={false}>
                            <span className="sr-only">Home</span>
                            <Image 
                                width={66}
                                height={80}
                                alt="imagen no disponible"
                                src="/pet.png"
                                className="mt-1"
                            />
                        </Link>
                    </div>

                    {/* Menú y Avatar */}
                    <div className={`flex items-center gap-8 ${dosis.className}`}>
                        {/* Menú */}
                        <nav aria-label="Global" className="hidden md:block">
                            <ul className="flex items-center gap-6 text-xl">
                                <li>
                                    <Link className="text-white transition hover:text-gray-400/75 hover:scale-105" href="/about" prefetch={false}> About </Link>
                                </li>
                                <li>
                                    <a className="text-white transition hover:text-gray-400/75" href="#"> Cursos </a>
                                </li>
                                <li>
                                    <a className="text-white transition hover:text-gray-400/75" href="#"> Subir curso </a>
                                </li>
                                <li>
                                    <a className="text-white transition hover:text-gray-400/75" href="#"> Contacto </a>
                                </li>
                            </ul>
                        </nav>

                        {/* Avatar */}
                        <div className="relative hidden md:block">
                            <button
                                type="button"
                                className="overflow-hidden rounded-full border border-gray-300 shadow-inner"
                            >
                                <span className="sr-only">Toggle dashboard menu</span>
                                <img
                                    src="https://i.pinimg.com/474x/07/c4/72/07c4720d19a9e9edad9d0e939eca304a.jpg"
                                    alt=""
                                    className="size-10 object-cover"
                                    id="copilot"
                                />
                            </button>
                            {/* ...dropdown menu... */}

                            {/* TODO -> Remover el HIDDEN  */}
                            <div
                                className="hidden absolute end-0 z-10 mt-0.5 w-56 divide-y divide-gray-100 rounded-md border border-gray-100 bg-white shadow-lg"
                                role="menu"
                            >
                                {/* ...menu items... */}
                            </div>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="block md:hidden">
                        <button
                            className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}