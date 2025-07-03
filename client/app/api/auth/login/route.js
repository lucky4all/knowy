const sdk = require("node-appwrite")
import { NextResponse } from "next/server";

let client = new sdk.Client();

client
    .setEndpoint(process.env.NEXT_PUBLIC_API_ENDPOINT)
    .setProject(process.env.NEXT_PUBLIC_PROJECT_ID) 
    .setKey(process.env.NEXT_PUBLIC_API_KEY)
    .setSelfSigned() // Use only on dev mode with a self-signed SSL cert
;

export async function POST(request) {
    /* TODO */
}