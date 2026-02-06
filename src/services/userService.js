import { api } from "./api";

export const getUsersWithSurvey = async () => {
  const res = await api.get("/users");

  console.log("CONSULTA PERFIL:");
  console.log(res.data); // 🔥 IMPRIME EL JSON GRANDE

  return res;
};