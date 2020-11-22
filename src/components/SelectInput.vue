<template>
  <div class="select-input">
    <p>{{ label }}</p>
    <select v-model="model">
      <option style="font-family: 'Lato', sans-serif">İstanbul</option>
      <option style="font-family: 'Lato', sans-serif">Ankara</option>
    </select>
    <span
      v-if="!isValid"
      style="font-size: 8px; color: rgb(255, 0, 0); margin-top: 5px"
      >*Required</span
    >
  </div>
</template>

<script>
export default {
  name: "SelectInput",
  components: {},
  props: {
    selectedLocation: {
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
  data() {
    return {};
  },
  computed: {
    model: {
      get() {
        return this.selectedLocation;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
};
</script>

<style scoped lang="scss">
.select-input {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
select {
  width: 150px;
  border: solid 1px;
  border-radius: 5px;

  &:focus {
    border: solid 2px;
  }
}
option {
  width: 150px;
  border: solid 0.1em;
  border-radius: 25px;

  &:focus {
    border: solid 0.3em;
  }
}
</style>