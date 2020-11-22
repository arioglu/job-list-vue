<template>
  <div class="job-detail-container">
    <div class="job-detail-container-btn back-btn">
      <Button :label="'Back'" style="margin: 0" @back="$router.go(-1)" />
    </div>
    <div class="job-detail">
      <p class="job-title__label">{{ jobTitle }}</p>
      <p>{{ companyName }}</p>
      <p class="job-loc__label">{{ cityName }} / {{ townName }}</p>

      <p style="margin-top: 50px; font-weight: 900">Detailed Job Description</p>
      <p style="margin-bottom: 20px; font-size: 13px">
        {{ description }}
      </p>
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
      return this.getDetails.result?.description || "Test Description";
    },
    cityName() {
      return this.getDetails.result?.cityName || "Test City";
    },
    townName() {
      return this.getDetails.result?.townName || "Test Town";
    },
    jobTitle() {
      return this.getDetails?.result?.positionName || "Test Position";
    },
    companyName() {
      return this.getDetails.result?.companyName || "Test Company";
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
  background-color: #ffeafd;
  border-radius: 5px;
  > p {
    margin: 10px 0;
    padding: 0 10px;
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
}
.job-title__label {
  font-style: italic;
  font-size: 20px;
}
.job-loc__label {
  font-size: 13px;
}
</style>