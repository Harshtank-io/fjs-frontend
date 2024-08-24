import axiosClient from ".";

export const login = async ({ email, password }) => {
  return axiosClient.post("/login", { email, password });
};

export const signup = async ({ username, email, password }) => {
  return axiosClient.post("/register", { username, email, password });
};
