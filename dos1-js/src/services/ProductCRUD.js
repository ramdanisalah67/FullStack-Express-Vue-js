import axios from "axios";

const api = "http://localhost:5000/api/product";

export const addProduct = async (obj) => {
  try {
    const response = await axios.post(api + "/addProduct", obj);
    return response.data;
  } catch (error) {
    throw new Error("Error fetching data:", error);
  }
};

export const getProductById = async (id) => {
  try {
    const response = await axios.get(api + "/" + id);
    return response.data;
  } catch (error) {
    throw new Error("Error fetching data:", error);
  }
};

export const updateProduct = async (id, newProduct) => {
  try {
    const response = await axios.put(api + "/" + id, newProduct);
    return response.data.message;
  } catch (error) {
    throw new Error("Error fetching data:", error);
  }
};
export const deleteProduct = async (id) => {
  try {
    const response = await axios.delete(api + "/" + id);
    return response.data.message;
  } catch (error) {
    throw new Error("Error fetching data:", error);
  }
};
