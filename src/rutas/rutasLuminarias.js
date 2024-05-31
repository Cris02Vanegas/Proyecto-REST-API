import { Router } from "express";
import controladorLuminarias from "../controladores/controladorLuminarias.js";

const enrutadorLuminarias = Router();

enrutadorLuminarias.post("/", controladorLuminarias.crearReferenciaLuminaria);

enrutadorLuminarias.get("/", controladorLuminarias.leerReferenciasLuminarias);

enrutadorLuminarias.get("/:id", controladorLuminarias.leerReferenciaLuminaria);

enrutadorLuminarias.put("/:id", controladorLuminarias.actualizarLuminaria);

enrutadorLuminarias.delete("/:id", controladorLuminarias.eliminarLuminaria);

export default enrutadorLuminarias;