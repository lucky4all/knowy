import Image from "next/image"
import { Dosis } from "@next/font/google"
import "./alt.css"

const dosis = Dosis({
    weight: "400",
    subsets: ['latin']
})

export default function NotFound() {
    return (
        <section className="text-red-500 text-4xl font-bold flex flex-col gap-15 items-center justify-center mt-16">
            <h1 className={dosis.className}>¡Pagina no encontrada! ¿Ingresaste la URL correcta?</h1>
            <Image 
            width={200}
            height={150}
            alt="imagen no disponible"
            src="/pet.png"
            />
        </section>
    )
}