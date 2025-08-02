import axiosInstance from "../utils/axiosInstance";

export const getServices = async () => {
  const response = await axiosInstance.get("/services/get");
  return response.data; // make sure your backend returns an array!
};
