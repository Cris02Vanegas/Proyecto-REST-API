import express from "express";
import morgan from "morgan";
import enrutadorLuminarias from "./rutas/rutasLuminarias.js";

const servidor = express()

servidor.use(morgan("dev"))
servidor.use(express.json())
servidor.use("/referencias", enrutadorLuminarias)

servidor.get("/", (solicitud, respuesta) => {
    respuesta.status(404).send("No encontrado");
});

export default servidor;
