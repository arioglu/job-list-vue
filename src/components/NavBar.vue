<template>
  <nav class="grid-item">{{ title }}</nav>
</template>

<script>
export default {
  name: "NavBar",
  components: {},
  props: {
    title: {
      type: String,
      default: "Navbar",
    },
  },
};
</script>

<style scoped lang="scss">
.grid-item {
  display: grid;
  align-items: center;
  justify-content: center;
}
</style>