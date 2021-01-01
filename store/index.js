export const state = () => ({
  name: localStorage.getItem("name") || "default_username"
});

export const mutations = {
  setName(state, name) {
    state.name = name;
  }
};
