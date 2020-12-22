<template>
  <div>
    <Header class="header" />
    <h1>Bienvenue {{ $store.state.name }}</h1>
  </div>
</template>

<script>
import Header from "../components/Header";
export default {
  components: {
    Header,
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
</style>