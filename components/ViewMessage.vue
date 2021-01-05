<template>
  <div class="view-message">
    <h3>{{ message }}</h3>
  </div>
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
};
</script>
<style scoped>
h3 {
  width: 300px;
  word-wrap: break-word;
}
</style>