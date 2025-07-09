import Image from "next/image"

export default function Load() {
    return(
        <section className="text-5xl mt-[10vh] text-indigo-600 flex justify-center items-center gap-5">
            <h1>Estamos trabajando...</h1>
            <Image 
            src="/lay.png"
            width={250}
            height={300}
            alt="imagen no disponible"
            priority="low"
            />
        </section>
        
    )
}