"use client"
import { useEffect, useState } from "react";
export default function Home() {
    const [name, setName] = useState('');

    useEffect(() => {
        let username = getData()
        let parsed = JSON.parse(username)
        setName(parsed.user)
    })
    return (
        <>
            <h1>Bienvenido a tu panel de naveagación</h1>
            dato: {name}
        </>
    )
}

export async function getData() {
    "use server"
    let response = await fetch(url);
    let data = await response.json();
    return data
}