<template>
  <div>
    <Header class="header" />

    <Title />
    <div class="app-wrapper">
      <BuzzerLeaderboard />
      <BuzzerButton />
    </div>
    <ResetLeaderboardButton
      v-if="this.$store.state.isAdmin"
      class="btn-reset"
    />
  </div>
</template>

<script>
import Header from "../components/Header";
import BuzzerButton from "../components/BuzzerButton";
import BuzzerLeaderboard from "../components/BuzzerLeaderboard";
import ResetLeaderboardButton from "../components/ResetLeaderboardButton";
import Title from "../components/Title";

export default {
  components: {
    Header,
    BuzzerButton,
    BuzzerLeaderboard,
    ResetLeaderboardButton,
    Title,
  },
};
</script>

<style scoped>
.header {
  padding: 15px 25px;
}

.app-wrapper {
  margin-top: 50px;
  display: flex;
  gap: 65px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap-reverse;
}

.btn-reset {
  margin-top: 50px;
  margin-left: 100px;
}
</style>