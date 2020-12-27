<template>
  <div class="title-wrapper">
    <h1>Bienvenue {{ $store.state.name }}</h1>
    <h2>Question {{ index_question }}</h2>
  </div>
</template>
<script>
export default {
  mounted() {
    const messageRef = this.$fire.database.ref("index_question");
    messageRef.on("value", (snap) => (this.index_question = snap.val()));
  },
  data() {
    return {
      index_question: 1,
    };
  },
};
</script>
<style scoped>
.title-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 10vh;
}
</style>
