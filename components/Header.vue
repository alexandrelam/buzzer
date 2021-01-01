<template>
  <div class="header-wrapper">
    <ConnectedUserList />
    <NuxtLink to="/"
      ><a-button type="danger" @click="handleQuit">
        Quitter
      </a-button></NuxtLink
    >
  </div>
</template>
<script>
import ConnectedUserList from "./ConnectedUserList";
import { mapMutations } from "vuex";

export default {
  components: {
    ConnectedUserList,
  },
  methods: {
    ...mapMutations({
      setName: "setName",
    }),
    handleQuit() {
      localStorage.setItem("name", "Merci de quitter l'application");
      localStorage.clear();
      this.$fire.database.ref("users").child(this.$store.state.name).remove();
      this.$fire.database
        .ref("answer_points")
        .child(this.$store.state.name)
        .remove();
      this.setName("default_username");
    },
  },
};
</script>
<style scoped>
.header-wrapper {
  display: flex;
  justify-content: space-between;
}
</style>