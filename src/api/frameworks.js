import axiosClient from ".";

export const getFrameworks = async () => {
  return axiosClient.get("/frameworks");
};

export const getFramework = async (id) => {
  return axiosClient.get(`/frameworks/${id}`);
};

export const postFrameworkRating = async (id, rating, comment) => {
  return axiosClient.post(`/frameworks/${id}/rating`, {
    user: "fjs",
    rating,
    comment,
  });
};
