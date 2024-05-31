import modeloLuminarias from "../modelos/modeloLuminarias.js";

const controladorLuminarias = {
    //Crear Referencia Luminarias
    crearReferenciaLuminaria: async (solicitud, respuesta) => {
        try {
            const nuevaReferenciaLuminaria = new modeloLuminarias(solicitud.body);
            const referenciaEncontrada = await nuevaReferenciaLuminaria.save();
            if (referenciaEncontrada._id) {
                respuesta.json({
                    resultado: "Exitoso",
                    mensaje: "Referencia Creada",
                    datos: referenciaEncontrada
                })
            }
        } catch (error) {
            respuesta.json({
                resultado: "Mal",
                mensaje: "Ocurrio un error al crear referencia de luminaria!!",
                datos: error,
            });
        }
    },

    //leert todas las referencias
    leerReferenciasLuminarias: async (solicitud, respuesta) => {
        try {
            const referenciasEncontradas = await modeloLuminarias.find();
            if (referenciasEncontradas) {
                respuesta.json({
                    resultado: "Exitoso",
                    mensaje: "Referencias Leídas",
                    datos: referenciasEncontradas,
                })
            }
        } catch (error) {
            respuesta.json({
                resultado: "Mal",
                mensaje: "Ocurrio un error al leer todas las referencias de las luminarias!!",
                datos: error,
            });
        }
    },

    //leer referencia
    leerReferenciaLuminaria: async (solicitud, respuesta) => {
        try {
            const referenciaEncontrada = await modeloLuminarias.find({ id_Ucap: solicitud.params.id })
            if (referenciaEncontrada) {
                respuesta.json({
                    resultado: "Exitoso",
                    mensaje: "Referencia Leída",
                    datos: referenciaEncontrada,
                })
            }
        } catch (error) {
            respuesta.json({
                resultado: "Mal",
                mensaje: "Ocurrio un error al leer la referencia de la luminaria!!",
                datos: error,
            });
        }

    },

    //Actualizar Referencia
    actualizarLuminaria: async (solicitud, respuesta) => {
        try {
            const updateReferencia = await modeloLuminarias.findByIdAndUpdate(solicitud.params.id, solicitud.body);
            if (updateReferencia._id) {
                respuesta.json({
                    resultado: "Exitoso",
                    mensaje: "Referencia Actualizada",
                    datos: updateReferencia,
                })
            }
        } catch (error) {
            respuesta.json({
                resultado: "Mal",
                mensaje: "Ocurrio un error al actualizar la referencia de la luminaria!!",
                datos: error,
            });
        }

    },

    // Eliminar Referencia
    eliminarLuminaria: async (solicitud, respuesta) => {
        try {
            const eliminarReferencia = await modeloLuminarias.findByIdAndDelete(solicitud.params.id);
            if (eliminarReferencia._id) {
                respuesta.json({
                    resultado: "Exitoso",
                    mensaje: "Referencia Eliminada",
                    datos: eliminarReferencia,
                })
            }
        } catch (error) {
            respuesta.json({
                resultado: "Mal",
                mensaje: "Ocurrio un error al eliminar la referencia de la luminaria!!",
                datos: error,
            });
        }
    }


}

export default controladorLuminarias;