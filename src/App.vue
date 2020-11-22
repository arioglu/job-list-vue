<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  computed: {
    pageTitle() {
      return "Job Search";
    },
  },
  mounted() {},
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");
#app {
  font-family: "Lato", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
