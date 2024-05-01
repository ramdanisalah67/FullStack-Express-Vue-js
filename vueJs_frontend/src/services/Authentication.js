import axios from "axios";

const api = "http://localhost:5000/api/auth";

export const login = async (obj) => {
  try {
    const response = await axios.post(api + "/login", obj);
    return response.data;
  } catch (error) {
    throw new Error("Error fetching data:", error);
  }
};

export const register = async (obj) => {
  try {
    const response = await axios.post(api + "/register", obj);
    return response.data;
  } catch (error) {
    throw new Error("Error fetching data:", error);
  }
};
