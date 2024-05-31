import mongoose, { Schema, model } from "mongoose";

const esquemaLuminaria = new Schema(
    {
        fabricante: { type: String, required: true },
        marca: { type: String, required: true },
        tecnologia: { type: String, required: true },
        capacidad: { type: Number, required: true },
        consumoInterno: Schema.Types.Decimal128,
        potenciaTotal: Schema.Types.Decimal128,
        ValorUcap: Schema.Types.Decimal128,
        fechaCreacion: { type: Date, required: true },
        ubicacionCiudad: { type: Boolean, required: true },
        ubicacionMunicipio: { type: Boolean, required: true },
        id_Ucap: { type: String, required: true }
    }
)

export default model("Referencia", esquemaLuminaria);
