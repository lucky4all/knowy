import { Client, Users, ID } from "node-appwrite"
import { NextResponse } from "next/server";

let client = new Client();

client
    .setEndpoint(process.env.API_ENDPOINT)
    .setProject(process.env.PROJECT_ID) 
    .setKey(process.env.API_KEY)
    .setSelfSigned()
;

export async function POST(request) {
    let users = new Users(client);
    try {
        const { email, username, password } = await request.json();

        if (!email || !username || !password) {
            return NextResponse.json({
                operation: "error",
                message: "Faltan datos del cliente"

            },{status: 400})
        }
        const newUser = await users.create(ID.unique(), email, null, password, username);
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