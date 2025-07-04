"use client"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef } from "react"
import Typed from "typed.js"

export function HomePage() {
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

export default function AltHomePage() {
  const el = useRef(null)

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Cálidad', 'Knowy'],
      typeSpeed: 100,
    })
     return() => {
        typed.destroy()
      }
  },[])
  return (
    <section className="bg-white lg:grid lg:h-screen lg:place-content-center">
      <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="max-w-prose text-left">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Formate de forma online con
            <strong ref={el} className="text-indigo-600 ml-3"> Knowy </strong>
            de manera sencilla
          </h1>

          <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
            Nos encontramos en pleno crecimiento, somos una startup con ganas de crecer en el nicho. Ofreceremos cursos con certificaciones incluidas en el precio
          </p>

          <div className="mt-4 flex gap-4 sm:mt-6">
            <Link
              className="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
              href="/404"
            >
              Inscribirse a la lista de espera
            </Link>

            <Link
              className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900"
              href="/about"
              prefetch={false}
            >
              Leer mas
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}