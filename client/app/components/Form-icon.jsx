import { Commissioner } from "next/font/google"

const comissioner = Commissioner({
    weight: ["700"],
    subsets: ["latin"],
})

export default function FormIcon() {
    return (
        <span className={comissioner.className}><h1 className="text-sky-600 text-5xl font-bold">Knowy</h1></span>
    )
}