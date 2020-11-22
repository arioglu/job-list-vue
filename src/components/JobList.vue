<template>
  <div class="job-list-container">
    <div class="btn-group">
      <div class="job-list-item" style="justify-content: flex-start">
        <Button :label="'Back'" class="back-btn" @back="$router.go(-1)" />
      </div>
    </div>
    <div style="width: 100%">
      <div class="job-list-item" v-for="result in jobList" :key="result.id">
        <div class="job-detail" @click="showJobDetails(result.jobId)">
          <p class="job-detail__position">{{ result.positionName }}</p>
          <p class="job-detail__company">
            {{ result.companyName }}
          </p>
          <p class="job-detail__location">
            {{ result.townName }}
          </p>
          <p class="job-detail__duration-day">
            {{ result.durationDayText }}
          </p>
        </div>
      </div>
      <div v-if="isListEmpty" class="not-found">No results were found.</div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Button from "./Button.vue";

export default {
  name: "JobList",
  components: { Button },
  props: {
    city: {
      type: String,
      default: "",
    },
    keyword: {
      type: String,
      default: "",
    },
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters("jobStore", {
      getJobList: "getSearchResults",
    }),
    jobList() {
      return this.getJobList;
    },
    isListEmpty() {
      return this.jobList.length < 1;
    },
  },
  mounted() {
    if (this.$route.params.city) {
      this.fetchJobsByCity(this.$route.params.city);
    } else {
      this.fetchJobsByKeyword(this.$route.params.keyword);
    }
  },
  methods: {
    ...mapActions("jobStore", {
      fetchJobsByCity: "listJobsByLocation",
      fetchJobsByKeyword: "listJobsByKeyword",
    }),
    showJobDetails(id) {
      this.$router.push({
        path: `/jobdetail/${id}`,
      });
    },
  },
};
</script>

<style scoped lang="scss">
p {
  margin: 0 5px;
  font-family: "Roboto", sans-serif;
  font-weight: lighter;
}
.list-wrapper {
  width: 100%;
  margin-bottom: 20px;
}

.job-list-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  background-color: rgb(255, 255, 255);
}

.job-detail {
  padding: 20px 20px;
  margin-bottom: 10px;
  border-radius: 5px;
  background-color: lightsalmon;
  transition: background-color 0.5s ease;
  width: 50%;
  &:hover {
    cursor: pointer;
    background-color: rgb(225, 231, 230);
  }
  @media only screen and (max-width: 720px) {
    width: 70%;
  }
}
.job-list-item {
  width: 100%;
  display: flex;
  justify-content: center;
}
.job-detail__position {
  font-size: 20px;
  font-weight: bold;
  margin: 3px 5px;
}
.job-detail__company {
  font-size: 18px;
}
.job-detail__location {
  font-size: 14px;
}
.job-detail__duration-day {
  display: flex;
  justify-content: flex-end;
}
.back-btn {
  display: flex;
  justify-content: center;

  @media (max-width: 720px) {
    width: 100%;
  }
}
.btn-group {
  width: calc(50% + 50px);
  margin-bottom: 20px;
  @media only screen and (max-width: 720px) {
    width: calc(70% + 50px);
  }
}
.not-found {
  justify-content: center;
  display: flex;
  margin: 100px;
  white-space: nowrap;
}
</style>