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

            <p className="mt-8"><i>Knowy</i></p>
        </header>
    )
}