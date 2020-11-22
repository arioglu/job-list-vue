export function listJobsByKeyword({ commit, getters }, param) {
  // assuming there will be an api call, try-catch should be used
  try {
    const result = getters.getJobList[0];
    param = param.toLocaleUpperCase();
    if (result.statusCode === 200) {
      let { items } = result.result;
      items = items.filter(
        (item) =>
          item.positionName.toUpperCase().includes(param) ||
          item.companyName.toUpperCase().includes(param) ||
          item.cityName.toUpperCase().includes(param) ||
          item.townName.toUpperCase().includes(param)
      );
      commit("LIST_JOB_SUCCESS", items);
    }
  } catch (err) {
    commit("LIST_JOB_ERR", err);
  }
}

export function listJobsByLocation({ commit, getters }, param) {
  // assuming there will be an api call, try-catch should be used
  try {
    const result = getters.getJobList[0];
    if (result.statusCode === 200) {
      let { items } = result.result;
      items = items.filter(item => item.cityName===param);
      commit("LIST_JOB_SUCCESS", items);
    }
  } catch (err) {
    commit("LIST_JOB_ERR", err);
  }
}

export function getJobDetailsById({ commit, getters }, param) {
  // assuming there will be an api call, try-catch should be used
  try {
    const result = getters.getJobDetails;
    result.forEach((element) => {
      if (element.result.jobId === param) {
        commit("DETAIL_JOB_SUCCESS", element);
      }
    });
  } catch (err) {
    commit("DETAIL_JOB_ERR", err);
  }
}
