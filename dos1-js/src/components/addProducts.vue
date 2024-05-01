<template>
  <div class="cont">
    <p class="title">welcome To Add Product Page</p>
    <div>
      <form>
        <p>name</p>
        <input class="form-control" type="text" v-model="name" />
        <p>description</p>
        <input type="text" class="form-control" v-model="description" />
        <p>price</p>
        <input type="text" class="form-control" v-model="price" />
      </form>
    </div>
    <p>{{ message }}</p>
    <div class="buttons">
      <button @click="addProduct()">save</button>
      <p><button @click="goToProductsList()">all Product</button></p>
    </div>
  </div>
</template>
<script>
import { addProduct } from "@/services/ProductCRUD";

export default {
  data() {
    return {
      name: "",
      description: "",
      price: "",
      message: "",
    };
  },
  methods: {
    async addProduct() {
      const obj = {
        name: this.name,
        description: this.description,
        price: this.price,
      };
      console.log(obj);
      try {
        const response = await addProduct(obj);
        console.log(response);
        this.message = response.message;
      } catch (error) {
        console.error("Login error:", error);
      }
    },
    goToProductsList() {
      this.$router.push("/products");
    },
  },
};
</script>
<style lang="css" scoped>
.cont {
  border-radius: 25px;
  width: 100%;

  background-color: cadetblue;
  font-size: 20px;
  padding: 20px;
}
.title {
  font-weight: bolder;
}
input {
  width: 350px;
  height: 25px;
}
button {
  width: 170px;
  height: 35px;
  background: black;
  color: white;
  font-weight: bold;
  cursor: pointer;
  border-radius: 25px;
}
</style>
