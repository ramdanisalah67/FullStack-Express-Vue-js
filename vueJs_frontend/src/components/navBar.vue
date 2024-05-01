<template>
  <div>
    <div class="navbar">
      <ul>
        <li>
          <router-link to="/" class="rt">Home</router-link>
        </li>
        <li><router-link to="/about" class="rt">About</router-link></li>
        <li><router-link to="/products" class="rt">products</router-link></li>
        <li><router-link to="/Docs" class="rt">Docs</router-link></li>
        <li>
          <router-link to="/login" class="rt" v-if="!isAuthenticated"
            >login</router-link
          >
          <a class="rt" v-if="isAuthenticated" @click="logout()">logout</a>
        </li>
        <li><router-link to="/register" class="rt">register</router-link></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    loggedIn: Boolean,
  },
  data() {
    return {
      authenticated: false,
    };
  },
  methods: {
    isAuthenticated() {
      if (localStorage.getItem("token") && this.loggedIn == true) {
        return true;
      }
      if (!localStorage.getItem("token") && !this.loggedIn == true) {
        return false;
      }
    },
    logout() {
      localStorage.clear();
    },
  },
  mounted() {
    console.log(this.isAuthenticated());
  },
};
</script>
<style lang="css" scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.navbar {
  background-color: #333;
  height: 50px;
  width: 800px;
  display: flex;
  justify-content: center;
  position: relative;
  margin: auto;
  top: 30px;
  align-items: stretch;
}

.navbar ul {
  display: flex;
  flex-grow: 1;
  justify-content: space-around;
  color: white;
  list-style: none;
  align-items: stretch;
}
.navbar ul li {
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-grow: 1;
}

.navbar ul li:hover {
  background-color: cadetblue;
  cursor: pointer;
}

.navbar ul li:hover a {
  color: rgb(0, 0, 0);
  font-weight: bolder;
}
.rt {
  text-decoration: none;
  display: flex;
  justify-content: center;
  flex-grow: 1;
  align-items: center;
  color: white;
}
</style>
