import { NextResponse } from "next/server";
import { Client, Databases, ID } from 'node-appwrite';

const MESSAGE_TYPES = Object.freeze({
    ok: {operation: "succefull"},
    error: {operation: "something went wrong"}
})


const client = new Client()
    .setEndpoint(process.env.API_ENDPOINT)
    .setProject(process.env.PROJECT_ID)
    .setKey(process.env.API_KEY)
    .setSelfSigned();

const database = new Databases(client);

export async function POST(req) {
   
    const { name, username, email } = await req.body;

    if (!name || !username || !email) {
        return NextResponse.json(MESSAGE_TYPES.error, {status: 400})
    }

    try {
        const response = await database.createDocument(
            process.env.DATABASE_ID,
            process.env.COLLECTION_ID,
            ID.unique(),
            {name, username, email}
        )
        console.log("Usuario creado con exito");
        return NextResponse.json(MESSAGE_TYPES.ok, {status: 201});

    } catch(error) {
        console.info(`No se ha podido crear el usuario debido a: ${error}`);
        return NextResponse.json(MESSAGE_TYPES.error, {status: 500})
    }
}