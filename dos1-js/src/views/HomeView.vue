<template>
  <div class="home">
    <p>Welcome to Home Page</p>
    <router-link :to="{ name: 'login' }">login</router-link>
    <router-link :to="{ name: 'books' }">books</router-link>

    <router-view />
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>
