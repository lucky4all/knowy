import { Client, Account } from "node-appwrite"
import { NextResponse } from "next/server";

let client = new Client()
client
    .setEndpoint(process.env.API_ENDPOINT)
    .setProject(process.env.PROJECT_ID) 
    .setKey(process.env.API_KEY)
    .setSelfSigned()
;

const account = new Account(client)

export async function POST(request) {
    try {
        const { email, password } = await request.json();

        if (!email || !password) {
            return NextResponse.json({
                operation: "Faltan datos del cliente"
            }, {status: 400})
        }

        const action = await account.createEmailPasswordSession(email, password);
        console.log("El usuario ha iniciado sesion con exito")
    } catch(er) {
        console.log("No se ha podido iniciar sesion: ", er)
        return NextResponse.json({
            operation: "No se ha podido iniciar sesion"
        }, {status: 500})
    }
}