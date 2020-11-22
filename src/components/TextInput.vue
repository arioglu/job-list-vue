<template>
  <div class="text-input">
    <p>{{ label }}</p>
    <input v-model="model" />
    <span
      v-if="!isValid"
      style="font-size: 8px; color: rgb(255, 0, 0); margin-top: 5px"
      >*Required</span
    >
  </div>
</template>

<script>
export default {
  name: "TextInput",
  components: {},
  data() {
    return {};
  },
  props: {
    queryString: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    isValid: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    model: {
      get() {
        return this.queryString;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
};
</script>

<style scoped lang="scss">
.text-input {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
input {
  width: 150px;
  border: solid 1px;
  border-radius: 5px;

  &:focus {
    outline: none;
    border: solid 2px;
  }
}
</style>