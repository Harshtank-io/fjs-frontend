import axiosClient from ".";

export const getFrameworks = async () => {
  return axiosClient.get("/frameworks");
};
