const sdk = require("node-appwrite")
import { NextResponse } from "next/server";

let client = new sdk.Client();

client
    .setEndpoint(process.env.NEXT_PUBLIC_API_ENDPOINT)
    .setProject(process.env.NEXT_PUBLIC_PROJECT_ID) 
    .setKey(process.env.NEXT_PUBLIC_API_KEY)
    .setSelfSigned() // Use only on dev mode with a self-signed SSL cert
;

/* Endpoint para iniciar sesión */
export async function POST(request) {
    let users = new sdk.Users(client);
    try {
        const { email, username, password } = await request.json();

        if (!email || !username || !password) {
            return NextResponse.json({
                operation: "error",
                message: "Faltan datos del cliente"

            },{status: 400})
        }
        const newUser = await users.create(sdk.ID.unique(), email, null, password, username);
        console.info("Usuario creado: ", newUser);

        return NextResponse.json({
            operation: "success",
            message: "Usuario creado con exito"
        }, {status: 201})


    } catch(er) {
        console.error("No se ha podido crear el usuario", er);
        return NextResponse.json({
            operation: "error",
            message: "No se ha podido crear el usuario"
        }, {status: 500})
    }
}