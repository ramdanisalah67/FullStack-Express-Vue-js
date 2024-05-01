<template>
  <div>
    <p>welcome {{ username }} To Your login page</p>
    <div>
      <form>
        <p>email</p>
        <input type="text" v-model="email" />
        <p>password</p>
        <input type="password" v-model="password" /><br />
        <button @click="authenticate()" class="btn btn-dark text-white mt-2">
          login
        </button>
      </form>
    </div>
  </div>
</template>
<script>
import { login } from "@/services/Authentication";
export default {
  props: {},
  data() {
    return {
      username: "salah-eddine",
      email: "",
      password: "",
    };
  },
  beforeRouteEnter() {
    if (localStorage.getItem("token")) {
      return "/";
    }
  },

  methods: {
    async authenticate() {
      const obj = {
        email: this.email,
        password: this.password,
      };
      console.log(obj);
      try {
        const response = await login(obj);
        localStorage.setItem("token", response.token);
        console.log(response.token);
        this.$emit("loggedIn", true);
        this.$router.push({ name: "products" });
      } catch (error) {
        console.error("Login error:", error);
      }
    },
  },
  components: {},
};
</script>
