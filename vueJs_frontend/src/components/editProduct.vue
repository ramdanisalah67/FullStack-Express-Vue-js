<template>
  <div class="cont">
    <p class="title">welcome To edit Product Page</p>
    <div>
      <form>
        <p>name</p>
        <input type="text" v-model="product.name" />
        <p>description</p>
        <input type="text" v-model="product.description" />
        <p>price</p>
        <input type="text" v-model="product.price" />
        <button @click="editProduct()">edit</button>
      </form>
    </div>
    <p>{{ message }}</p>
    <p><button @click="goToProductsList()">all Product</button></p>
  </div>
</template>
<script>
import { getProductById, updateProduct } from "../services/ProductCRUD";
export default {
  data() {
    return {
      product: { name: "", description: "", price: "", _id: "" },
      message: "",
    };
  },
  methods: {
    async editProduct() {
      console.log(this.product);
      try {
        this.message = await updateProduct(this.product._id, this.product);
        console.log(this.message);
      } catch (error) {
        console.log(error.error);
      }
    },
    goToProductsList() {
      this.$router.push("/products");
    },
    async retrieveProductById() {
      try {
        const response = await getProductById(this.id);
        this.product = response.message;
      } catch (error) {
        console.log(error.error);
      }
    },
  },
  mounted() {
    this.id = this.$route.params.id;
    this.retrieveProductById();
  },
};
</script>
<style lang="css" scoped>
.cont {
  border-radius: 25px;
  width: 100%;
  margin: auto;
  font-size: 20px;
  padding: 20px;
  border: 10px solid;
}
.title {
  font-weight: bolder;
  border-bottom: 7px solid rgb(119, 85, 85);
  width: 350px;
}
input {
  width: 350px;
  height: 25px;
}
button {
  width: 170px;
  height: 35px;
  background: rgb(14, 17, 14);
  color: rgb(174, 201, 182);
  border: 0px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 25px;
}
form p {
  font-weight: bolder;
}
</style>
