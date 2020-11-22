<template>
  <div class="container">
    <nav-bar :title="'Job Search'" />
    <div class="main">
      <div>
        <text-input
          :queryString="queryString"
          :label="'Jobs By Keyword'"
          :isValid="isValid"
          @input="setQueryString"
        />
        <select-input
          :selectedLocation="selectedLocation"
          :label="'Jobs By City'"
          :isValid="isValid"
          @input="setSelectedLocation"
        />
        <div class="button-group">
          <Button :label="'Search'" :isValid="isValid" @search="searchJobs" />
          <Button :label="'Reset'" :isValid="isValid" @reset="resetFields" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TextInput from "./TextInput";
import SelectInput from "./SelectInput";
import Button from "./Button.vue";
import NavBar from "./NavBar.vue";
export default {
  name: "HomeScreen",
  components: {
    TextInput,
    SelectInput,
    Button,
    NavBar,
  },
  data() {
    return {
      queryString: "",
      selectedLocation: "",
    };
  },
  computed: {
    cityOpts() {
      return ["İstanbul", "Ankara", "İzmir"];
    },
    isValid() {
      return this.validateForm();
    },
  },
  methods: {
    validateForm() {
      return this.queryString !== "" || this.selectedLocation !== "";
    },
    searchJobs() {
      if (this.isValid) {
        this.$router.push({
          path: "/joblist",
          name: "job-list",
          params: {
            keyword: this.queryString,
            city: this.selectedLocation,
          },
        });
      }
    },
    setQueryString(value) {
      this.queryString = value;
    },
    setSelectedLocation(value) {
      this.selectedLocation = value;
    },
    resetFields() {
      this.queryString = "";
      this.selectedLocation = "";
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
}
nav {
  background: #20a598;
  border-radius: 25px;
}
.main {
  background: #ffffff;
  border-radius: 25px;
}

.button-group {
  margin-top: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
