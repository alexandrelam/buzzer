export const state = () => ({
  name: localStorage.getItem("name") || "default_username",
  isAdmin: localStorage.getItem("isAdmin") || false
});

export const mutations = {
  setName(state, name) {
    state.name = name;
  },
  setIsAdmin(state, bool) {
    state.isAdmin = bool;
  }
};
