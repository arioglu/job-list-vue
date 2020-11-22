<template>
  <nav>{{ title }}</nav>
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
nav {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  color: #fff;
}
</style>