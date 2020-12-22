<template>
  <div class="connected-user-wrapper">
    <a-icon type="check-circle" theme="twoTone" two-tone-color="#52c41a" />
    <p>Connecté :</p>
    <a-button v-for="user in users" v-bind:key="user.name">{{
      user.username
    }}</a-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [],
    };
  },
  mounted: function () {
    const messageRef = this.$fire.database.ref("users");
    messageRef.on("value", (snap) => (this.users = snap.val()));
  },
};
</script>

<style scoped>
p {
  margin: 0;
  margin-left: 10px;
}
.connected-user-wrapper {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
button {
  margin-left: 10px;
  cursor: default;
}
</style>