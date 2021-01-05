<template>
  <a-textarea
    v-model="message"
    @change="handleChange"
    :auto-size="{ minRows: 10, maxRows: 15 }"
  />
</template>
<script>
export default {
  data() {
    return {
      message: "",
    };
  },
  mounted() {
    const messageRef = this.$fire.database.ref("message");
    messageRef.on("value", (snap) => (this.message = snap.val()));
  },
  methods: {
    handleChange(e) {
      this.$fire.database.ref("message").set(e.target.value);
    },
  },
};
</script>
<style scoped>
textarea {
  width: 300px;
}
</style>