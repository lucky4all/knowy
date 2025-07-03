import Image from "next/image"

export default function Cabeza() {
    return (
        <header className="py-1 text-4xl font-bold flex flex-row justify-start border-b-2 border-black">
            <Image
                width={100}
                height={50}
                alt="imagen no disponible"
                src="/lupa.png"
            />

            <p className="mt-8 ml-5"><i>Knowy</i></p>
            <Navbar />
        </header>
    )
}


/* TODO */
export function Navbar() {
    return (
        <div>
            <label htmlFor="Search">
                <div className="relative flex">
                    <input
                        type="text"
                        id="Search"
                        className="mt-0.5 w-full rounded border-gray-300 pe-10 shadow-sm sm:text-sm py-2 bg-sky-200 text-black"
                        placeholder="Buscar"
                    />

                    <span className="absolute inset-y-0 right-2 grid w-8 place-content-center">
                        <button
                            type="button"
                            aria-label="Submit"
                            className="rounded-full p-1.5 text-gray-700 transition-colors hover:bg-gray-100 mt-"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                                />
                            </svg>
                        </button>
                    </span>
                </div>
            </label>
        </div>
        

    )
}