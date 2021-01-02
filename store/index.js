export const state = () => ({
  name: localStorage.getItem("name") || "default_username",
  questionChange: 0
});

export const mutations = {
  setName(state, name) {
    state.name = name;
  },
  incrementQuestionChange(state) {
    state.questionChange++;
  }
};
