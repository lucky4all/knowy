import Image from "next/image"

export default function HomePage() {
  return (
    <main className="flex flex-row items-center justify-center text-5xl font-bold mt-[25vh]">
      <Image 
      height={200}
      width={150}
      alt="imagen no disponible"
      src="/lay.png"
      
      />
      <h1><i>En proceso...</i></h1>
    </main>
  )
}