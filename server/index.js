import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

const port = process.env.PORT;


app.use(express.json());
app.use(cors());
app.use(helmet())

app.get("/", (req, res) => {
    res.json({ estado: "servidor funcionando" });
 }
)

/*

Appwrite client SDK

*/

import { Client, Databases, ID } from "node-appwrite"

const client = new Client();
const db = new Databases(client);

client
    .setEndpoint(process.env.API_ENDPOINT)
    .setProject(process.env.PROJECT_ID)
    .setKey(process.env.API_KEY)
;

app.post("/preauth", async (req, res) => {
    let response = req.body;
    if (!response.name || !response.username || !response.email) {
        res.status(400).json({ operation: "Faltan datos del cliente" })
        return;
    }

    try {
        const operation = await db.createDocument('6864a3ee00160df88c81', '686f72fb00007726ce23', ID.unique(), response);
        res.status(201).json({ operation: "usuario creado con exito" })
    } catch(er) {
        console.log(er);
        res.status(500).json({ operation: "No se ha podido crear el usuario" })
    }
    
})

app.listen(port, () => {
    console.log("Servidor corriendo port el puerto: ", port)
})