import { api } from "./api";

// LOGIN
export const login = async (emailOrUser, password) => {
  try {
    const res = await api.post("/login", {
      emailOrUser,
      password,
    });
    return res;
  } catch (error) {
    // Log full error to console for debugging and rethrow the original axios error
    console.error("[authService] login error:", error.response || error);
    throw error;
  }
};

// REGISTER
export const register = async (payload) => {
  const { data } = await api.post("/register", payload);
  return data;
};