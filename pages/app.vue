<template>
  <div>
    <Header class="header" />
    <Title />
    <div class="app-wrapper">
      <BuzzerLeaderboard />
      <BuzzerButton />
    </div>
    <ScoreChart class="scorechart" />
    <ResetLeaderboardButton v-if="isAdmin" class="btn-reset" />
  </div>
</template>

<script>
import Header from "../components/Header";
import BuzzerButton from "../components/BuzzerButton";
import BuzzerLeaderboard from "../components/BuzzerLeaderboard";
import ResetLeaderboardButton from "../components/ResetLeaderboardButton";
import Title from "../components/Title";
import ScoreChart from "../components/ScoreChart";
export default {
  components: {
    Header,
    BuzzerButton,
    BuzzerLeaderboard,
    ResetLeaderboardButton,
    Title,
    ScoreChart,
  },
  data() {
    return {
      isAdmin: localStorage.getItem("isAdmin"),
    };
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

.scorechart {
  width: 400px;
  height: 600px;
  margin: auto;
}
</style>
