<template>
  <div class="container">
    <span :style="visibility"></span>
    <p v-if="visibility == 'display:none'">wlecome to product list Page</p>
    <button
      @click="goToAddProductPage()"
      v-if="visibility == 'display:none'"
      class="btn btn-light"
    >
      add Product
    </button>
    <p>{{ message }}</p>
    <table class="table" v-if="visibility == 'display:none'">
      <thead>
        <tr>
          <th>name</th>
          <th>description</th>
          <th>price</th>
          <th>actions</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="product in products" :key="product._id">
          <td>{{ product.name }}</td>
          <td>{{ product.description }}</td>
          <td>{{ product.price }}</td>
          <td>
            <button class="btn btn-success" @click="goToEdit(product._id)">
              edit</button
            ><button class="btn btn-danger" @click="delProduct(product._id)">
              delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from "axios";
import { deleteProduct } from "@/services/ProductCRUD";
export default {
  data() {
    return {
      products: [],
      message: "",
      visibility: "display:block",
    };
  },
  methods: {
    goToAddProductPage() {
      this.$router.push("addProduct");
    },
    async getProducts() {
      axios.get("http://localhost:5000/api/product/all").then((response) => {
        this.products = response.data.message;
        console.log(this.products);
        this.visibility = "display:none";
      });
    },
    goToEdit(id) {
      this.$router.push(`/edit/${id}`);
    },
    async delProduct(id) {
      try {
        const index = this.products.findIndex((e) => e.id == id);
        this.products.splice(index, 1);
        const data = await deleteProduct(id);
        this.message = data;
      } catch (error) {
        console.log(error.error);
      }
    },
  },
  mounted() {
    setTimeout(() => {
      this.getProducts();
    }, 1500);
  },
};
</script>

<style>
span {
  width: 50px;
  height: 50px;
  background-color: rgb(50, 99, 48);
  transition: 0.3s;
  animation: animate1 1s infinite;
  display: inline-block;
  border-radius: 50%;
  position: absolute;
  top: 200px;
  left: -40px;
}

@keyframes animate1 {
  0% {
    background-color: rgb(147, 180, 146);
    border-top: 15px solid black;
  }
  100% {
    background-color: rgb(169, 196, 169);
    border-bottom: 15px solid black;
  }
}
</style>
