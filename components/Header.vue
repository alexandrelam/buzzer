<template>
  <div class="wrapper">
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
      localStorage.setItem("name", "default_username");
      this.$fire.database.ref("users").child(this.$store.state.name).remove();
      //const loggedInUser = this.$fire.database.ref("users").child(this.name);
      //loggedInUser.on("value", (snap) => console.log(snap.val()));
      this.setName("default_username");
    },
  },
};
</script>
<style scoped>
.wrapper {
  display: flex;
  justify-content: space-between;
}
</style>