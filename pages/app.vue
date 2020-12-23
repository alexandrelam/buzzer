<template>
  <div>
    <Header class="header" />
    <h1>Bienvenue {{ $store.state.name }}</h1>
    <div class="app-wrapper">
      <BuzzerLeaderboard />
      <BuzzerButton />
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import BuzzerButton from "../components/BuzzerButton";
import BuzzerLeaderboard from "../components/BuzzerLeaderboard";

export default {
  components: {
    Header,
    BuzzerButton,
    BuzzerLeaderboard,
  },
};
</script>

<style scoped>
h1 {
  display: flex;
  justify-content: center;
  padding-top: 10vh;
}

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


@media only screen and (max-width: 400px) {

}
</style>