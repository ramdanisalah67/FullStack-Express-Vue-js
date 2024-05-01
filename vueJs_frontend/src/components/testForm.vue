<template>
  <div>
    {{ n }}
    <form @submit="eventHandle">
      <input type="submit" value="increment" @click="n++" />
      <input type="submit" value="decrement" @click="n--" />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      n: 0,
    };
  },
  methods: {
    eventHandle() {
      event.preventDefault();
    },
  },
};
</script>
