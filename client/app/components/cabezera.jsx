import Image from "next/image"
import Link from "next/link"
import { Roboto } from "next/font/google"

const roboto = Roboto({
    weight: "400",
    subsets: ['latin']
})

export default function Naver() {
    return (
        <header className="bg-white">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="md:flex md:items-center md:gap-12">
                        <Link className="block text-teal-600" href="/" prefetch={false}>
                            <span className="sr-only">Home</span>
                            <Image
                            src="/logo.png"
                            width={150}
                            height={200}
                            alt="imagen no disponible"
                            priority="high"
                            />
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <nav aria-label="Global" className={roboto.className}>
                            <ul className="flex items-center gap-6 text-xl mt-1 font-bold">
                                <li>
                                    <Link id="hea" href="/about" prefetch={false}> About </Link>
                                </li>

                                <li>
                                    <Link id="hea" href="/courses" prefetch={false}> Cursos </Link>
                                </li>

                                <li>
                                    <Link id="hea" href="/courses/publish" prefetch={false}> Publicar </Link>
                                </li>

                                <li>
                                    <Link id="hea" href="/account"> Mi cuenta </Link>
                                </li>

                                <li>
                                    <Link id="hea" href="/contact"> Contacto </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="sm:flex sm:gap-4">
                            <Link
                                className="rounded-md bg-white px-5 py-2.5 text-sm font-medium text-indigo-600 shadow-sm hover:bg-gray-300 transition-colors"
                                href="/login"
                            >
                                Iniciar sesión
                            </Link>

                            <div className="hidden sm:flex">
                                <Link
                                    className="rounded-md bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-indigo-500/80 transition-all hover:scale-105"
                                    href="/register"
                                    prefetch={true}
                                >
                                    Registrarse
                                </Link>
                            </div>
                        </div>

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
            </div>
        </header>

    )
}