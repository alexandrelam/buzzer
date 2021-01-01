<template>
  <a-button type="primary" shape="circle" icon="bell" @click="handleBuzzer" />
</template>
<script>
export default {
  data() {
    return {
      name: localStorage.getItem("name") || this.$store.state.name,
    };
  },
  methods: {
    handleBuzzer() {
      const time = this.getTime();
      this.$fire.database.ref("users/" + localStorage.getItem("name")).set({
        username: this.name,
        buzz_time: this.getTime(),
      });
    },
    getTime() {
      var date = new Date();
      return date.toISOString();
    },
  },
};
</script>
<style scoped>
button {
  width: 100px;
  height: 100px;
}
</style>
