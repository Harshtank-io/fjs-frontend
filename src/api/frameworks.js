import axiosClient from ".";

export const getFramework = async () => {
  return axiosClient.get("/frameworks");
};

export const postFrameworkRating = async (id, rating, comment) => {
  return axiosClient.post(`/frameworks/${id}/ratings`, { rating, comment });
};
