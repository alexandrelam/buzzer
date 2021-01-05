<template>
  <div>
    <Header class="header" />
    <Title />
    <div class="app-wrapper">
      <BuzzerLeaderboard />
      <BuzzerButton />
    </div>
    <div v-if="isAdmin" class="set-points-list">
      <AdminSetPoints
        v-for="(value, username) in connectedUser"
        :key="username"
        :name="username"
        :question_index="question_index"
      />
    </div>
    <div class="chart-message">
      <ScoreChart class="scorechart" />
      <AdminSetMessage class="admin-msg" />
    </div>
    <AdminResetButton v-if="isAdmin" class="btn-reset" />
  </div>
</template>

<script>
import Header from "../components/Header";
import BuzzerButton from "../components/BuzzerButton";
import BuzzerLeaderboard from "../components/BuzzerLeaderboard";
import AdminResetButton from "../components/AdminResetButton";
import Title from "../components/Title";
import ScoreChart from "../components/ScoreChart";
import AdminSetPoints from "../components/AdminSetPoints";
import AdminSetMessage from "../components/AdminSetMessage";

export default {
  components: {
    Header,
    Title,
    BuzzerLeaderboard,
    BuzzerButton,
    AdminResetButton,
    AdminSetPoints,
    AdminSetMessage,
    ScoreChart,
  },
  data() {
    return {
      isAdmin: localStorage.getItem("isAdmin"),
      connectedUser: {},
      question_index: 0,
    };
  },
  mounted() {
    const messageRef = this.$fire.database.ref("answer_points");
    messageRef.on("value", (snap) => {
      this.connectedUser = snap.val();
    });
    const questionIndexRef = this.$fire.database.ref("index_question");
    questionIndexRef.on("value", (snap) => (this.question_index = snap.val()));
  },
};
</script>

<style scoped>
.header {
  padding: 15px 25px;
}
.set-points-list {
  display: flex;
  justify-content: center;
  margin: auto;
  margin-top: 30px;
  flex-wrap: wrap;
  gap: 15px;
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
}

.chart-message {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.admin-msg {
  margin-top: 30px;
  margin-left: 65px;
}
</style>
