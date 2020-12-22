<template>
  <div class="wrapper">
    <a-icon type="check-circle" theme="twoTone" two-tone-color="#52c41a" />
    <p>Connecté :</p>
    <a-button v-for="user in users" v-bind:key="user.name" :size="small">{{
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
    messageRef.on("value", (snap) => console.log(snap.val()));
    console.log(this.users);
  },
};
</script>

<style scoped>
p {
  margin: 0;
  margin-left: 10px;
}
.wrapper {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
button {
  margin-left: 10px;
  cursor: default;
}
</style>