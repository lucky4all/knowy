export default function Home() {
    return (
        <>
            <section>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:items-center md:gap-8">
                        <div className="md:col-span-1">
                            <div className="max-w-lg md:max-w-none">
                                <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                                    Formarte online, nuestra misión y visión.
                                </h2>

                                <p className="mt-4 text-gray-700">
                                    Somos un grupo de desarrolladores los cuales buscan unir a tutores o docentes con ganas de compartir sus conocimientos con otras personas.
                                    Además, buscamos acercar a estudiantes que busquen aprender nuevas habilidades o reforzar conocimientos, facilitando el acceso a una comunidad educativa colaborativa y de calidad.
                                </p>
                            </div>
                        </div>

                        <div className="md:col-span-3">
                            <video
                                src="/knowy-pub.mp4"
                                className="rounded"
                                alt="video no disponible"
                                autoPlay
                                width={900}
                                height={900}
                            />
                        </div>
                    </div>
                </div>
            </section>
            <h1 className="text-center text-black text-4xl font-extrabold mt-12">Preguntas frecuentes</h1>
            <Faq></Faq>
        </>
    )
}

export function Faq() {
    return (
        <>
            <div className="flow-root max-w-[90vw] text-center mt-12">
                <div className="-my-4 flex flex-col divide-y divide-gray-200">
                    <details className="group py-4 [&_summary::-webkit-details-marker]:hidden" open>
                        <summary className="flex items-center justify-between gap-1.5 text-gray-900">
                            <h2 className="text-lg ml-[50%] font-medium">Cuando podré cursar?</h2>

                            <svg
                                className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </summary>

                        <p className="pt-4 text-gray-900">
                            Knowy aun sigue en proceso de construcción, aún no tenemos fecha de lanzamiento pero te invitamos a unirte al programa
                            de <a href="/joinus" className="text-blue-500 font-bold">programa de pre-alumnos</a> para obtener un descuento una vez lanzada la plataforma!
                        </p>
                    </details>

                    <details className="group py-4 [&_summary::-webkit-details-marker]:hidden">
                        <summary className="flex items-center justify-between gap-1.5 text-gray-900">
                            <h2 className="text-lg ml-[50%] font-medium">Puedo publicar cursos?</h2>

                            <svg
                                className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </summary>

                        <p className="pt-4 text-gray-900">
                            ¡Absolutamente! puedes contactarnos y solicitar un perfil de tutor. Si todo está en orden, vas a poder publicar tus
                            cursos y generar ingresos!
                        </p>
                    </details>

                    <details className="group py-4 [&_summary::-webkit-details-marker]:hidden">
                        <summary className="flex items-center justify-between gap-1.5 text-gray-900">
                            <h2 className="text-lg ml-[50%] font-medium">Como son las clases?</h2>

                            <svg
                                className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </summary>

                        <p className="pt-4 text-gray-900">
                            Las clases son 100% virtuales. Una vez adquirido un curso, se te dará acceso al campus virtual para que
                            puedas acceder al material. <strong>Es importante</strong> leer la modalidad de cada tutor. En la mayoria de los casos, el material se entrega
                            en formato PDF para que lo leas a tu ritmo, pero es probable que otros tutores tengan clases virtuales sincronicas.
                        </p>
                    </details>
                </div>
            </div>

        </>
    )
}