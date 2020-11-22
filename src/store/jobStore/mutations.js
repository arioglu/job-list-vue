export function LIST_JOB_SUCCESS(state, data) {
  state.searchResults = data;
}

export function DETAIL_JOB_SUCCESS(state, data) {
  state.selectedJob = data;
}

export function LIST_JOB_ERR(state, data) {
  state.listResultError = data;
}