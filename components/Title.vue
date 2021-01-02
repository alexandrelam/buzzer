<template>
  <div class="title-wrapper">
    <h1>Bienvenue {{ $store.state.name }}</h1>
    <div class="question-wrapper">
      <a-button
        v-if="isAdmin"
        size="small"
        icon="left"
        @click="previousQuestion"
      />
      <div class="question-wrapper" v-if="isAdmin">
        <h2>Question</h2>
        <a-input-number
          :min="1"
          :max="99"
          :value="index_question"
          @change="handleNumberChange"
        />
      </div>
      <h2 v-else>Question {{ index_question }}</h2>
      <a-button
        v-if="isAdmin"
        size="small"
        icon="right"
        @click="nextQuestion"
      />
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";

export default {
  mounted() {
    const messageRef = this.$fire.database.ref("index_question");
    messageRef.on("value", (snap) => (this.index_question = snap.val()));
  },
  methods: {
    ...mapMutations({
      incrementQuestionChange: "incrementQuestionChange",
    }),
    previousQuestion() {
      if (this.index_question > 1) {
        this.incrementQuestionChange();
        const messageRef = this.$fire.database
          .ref("index_question")
          .set(this.index_question - 1);
      }
    },
    nextQuestion() {
      if (this.index_question < 99) {
        this.incrementQuestionChange();
        const messageRef = this.$fire.database
          .ref("index_question")
          .set(this.index_question + 1);
      }
    },
    handleNumberChange(value) {
      const messageRef = this.$fire.database.ref("index_question").set(value);
    },
  },
  data() {
    return {
      index_question: 1,
      isAdmin: localStorage.getItem("isAdmin"),
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
