<template>
  <div class="job-detail-container">
    <div class="job-detail-container-btn back-btn">
      <Button :label="'Back'" style="margin: 0" @back="$router.go(-1)" />
    </div>
    <div class="job-detail">
      <p class="job-title__label">Job Title</p>
      <p>{{ cityName }} / {{ townName }}</p>
      <p style="margin-top: 50px">Detailed Job Description</p>
      <p style="margin-bottom: 20px">{{ description }}</p>
    </div>
    <div class="job-detail-container-btn apply-btn">
      <Button :label="'Apply'" style="margin: 0" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Button from "./Button.vue";

export default {
  name: "JobDetails",
  components: { Button },
  data() {
    return {};
  },
  computed: {
    ...mapGetters("jobStore", {
      getDetails: "getSelectedJob",
    }),
    description() {
      return this.getDetails.result.description;
    },
    cityName() {
      return this.getDetails.result.cityName;
    },
    townName() {
      return this.getDetails.result.townName;
    },
  },
  methods: {
    ...mapActions("jobStore", {
      fetchDetails: "getJobDetailsById",
    }),
  },
  mounted() {
    this.fetchDetails(this.$route.params.id);
  },
};
</script>

<style scoped lang="scss">
.job-detail-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  background-color: rgb(255, 255, 255);
}
.job-detail {
  width: 50%;
  margin: 20px 0;
  > p {
    margin: 10px 0;
    padding: 0;
  }
}
.job-detail-container-btn {
  display: flex;
  width: 50%;
  @media only screen and (max-width: 550px) {
    width: 50%;
  }
}
.back-btn {
  justify-content: flex-start;
}
.apply-btn {
  justify-content: center;
  width: 100%;
}
.job-title__label {
  font-style: italic;
  font-size: 20px;
}
</style>