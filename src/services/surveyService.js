import { api } from "./api";

// Enviar encuesta
export const sendSurvey = async (payload) => {
  const res = await api.post("/survey", payload);

  // 🔥 MUESTRA EN CONSOLA EL MENSAJE EXACTO DE LA API
  console.log("RESPUESTA ENCUESTA:");
  console.log(res.data);
  /*
  {
    message: "Encuesta completada exitosamente",
    data: {
      $metadata: { ... }
    }
  }
  */

  return res.data;
};

// Obtener todos los registros
export const getAll = async () => {
  const res = await api.get("/");

  // 🔥 MUESTRA TODOS LOS USUARIOS
  console.log("CONSULTA GENERAL:");
  console.log(res.data);
  /*
  {
    message: "Consulta Exitosa",
    data: [ ... ]
  }
  */

  return res.data;
};

// Buscar usuario
export const getUser = async (username) => {
  const res = await api.get(`/user/${username}`);

  // 🔥 MUESTRA SOLO UN USUARIO
  console.log(`🔍 CONSULTA USUARIO (${username}):`);
  console.log(res.data);

  return res.data;
};