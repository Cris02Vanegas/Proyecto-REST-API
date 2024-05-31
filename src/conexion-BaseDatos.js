import mongoose from "mongoose";

mongoose.connect(process.env.URL_MONGODB).then((dato) => {
    console.log("Bien, Conectado a la BD");
}).catch((error) => {
    console.log("Error, No hay conexion a la BD");
})