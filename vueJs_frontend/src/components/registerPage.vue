<template>
  <div>
    <p>welcome To Register Page</p>
    <div>
      <form>
        <p>username</p>
        <input type="text" v-model="username" />
        <p>email</p>
        <input type="text" v-model="email" />
        <p>password</p>
        <input type="password" v-model="password" /><br />
        <button @click="register()" class="btn btn-light mt-2">register</button>
      </form>
    </div>
  </div>
</template>
<script>
import { register } from "@/services/Authentication";
export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async register() {
      const obj = {
        email: this.email,
        password: this.password,
        username: this.username,
      };
      console.log(obj);
      try {
        const response = await register(obj);
        console.log(response);
      } catch (error) {
        console.error("Login error:", error);
      }
    },
  },
};
</script>
