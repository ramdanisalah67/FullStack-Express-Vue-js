<template>
  <div class="parent">
    <nav-bar-vue :loggedIn="loggedIn" @loggedIn="printEventMessage" />
    <div class="content">
      <router-view @loggedIn="printEventMessage" />
    </div>
  </div>
</template>

<script>
import navBarVue from "./components/navBar.vue";
export default {
  components: {
    navBarVue,
  },
  data() {
    return {
      loggedIn: false,
    };
  },
  methods: {
    printEventMessage(mess) {
      console.log(mess);
      if (mess == true) {
        this.loggedIn = true;
      }
      if (mess == false) {
        this.loggedIn = false;
      }
    },
  },
};
</script>
<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.parent {
  height: 100vh;
  width: 70%;
  margin: auto;
  position: relative;
  top: 20px;
  background-color: rgba(87, 112, 70, 0.952);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.content {
  position: relative;
  top: 80px;
  display: flex;
  justify-content: center;
}
</style>
