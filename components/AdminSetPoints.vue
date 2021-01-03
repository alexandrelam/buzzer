<template>
  <div class="admin-tag-wrapper">
    <h3>{{ name }}</h3>
    <a-input-number :id="name" v-model="value" @change="onChange" />
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  props: {
    name: String,
    question_index: Number,
  },
  data() {
    return {
      value: 0,
    };
  },
  mounted() {
    const messageRef = this.$fire.database.ref("answer_points/" + this.name);
    messageRef.on("value", (snap) => {
      this.value = snap.val().answer_points[this.question_index];
    });
  },
  computed: mapState(["questionChange"]),
  methods: {
    onChange(value) {
      this.$fire.database
        .ref("answer_points/" + this.name + "/answer_points/")
        .child(this.question_index)
        .set(value);
    },
  },
  watch: {
    questionChange: function (val, newval) {
      const messageRef = this.$fire.database.ref("answer_points/" + this.name);
      messageRef.on("value", (snap) => {
        this.value = snap.val().answer_points[this.question_index];
      });
    },
  },
};
</script>
<style scoped>
.admin-tag-wrapper {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
}
h3 {
  margin-right: 10px;
}
</style>