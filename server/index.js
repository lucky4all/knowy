const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const app = express();
require('dotenv').config();
const port = process.env.PORT;
app.use(express.json());
app.use(cors());
app.use(helmet())

app.get("/", (req, res) => {
    res.json({ estado: "servidor funcionando" });
 }
)

app.listen(port, () => {
    console.log("Servidor corriendo port el puerto: ", port)
})