import "dotenv/config"
import "./conexion-BaseDatos.js"
import servidor from "./servidor.js"

servidor.listen(3000, () => {
    console.log("Corriendo servidor - Puerto '3000'");
})