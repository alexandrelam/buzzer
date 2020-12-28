<template>
  <div class="title-wrapper">
    <h1>Bienvenue {{ $store.state.name }}</h1>
    <div class="question-wrapper">
      <a-button size="small" icon="left" @click="previousQuestion"/>
      <h2>Question {{ index_question }}</h2>
      <a-button size="small" icon="right" @click="nextQuestion"/>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    const messageRef = this.$fire.database.ref("index_question");
    messageRef.on("value", (snap) => (this.index_question = snap.val()));
  },
  methods: {
    previousQuestion() {
      if (this.index_question > 1) {
        const messageRef = this.$fire.database.ref("index_question").set(this.index_question - 1);
      }
    },
    nextQuestion() {
      if (this.index_question < 100) {
        const messageRef = this.$fire.database.ref("index_question").set(this.index_question + 1);
      }
    },
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
.question-wrapper {
  display: flex;
  gap: 30px;
  align-items: baseline;
}
</style>
