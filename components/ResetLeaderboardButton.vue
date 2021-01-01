<template>
  <a-button @click="resetLeaderboard" type="danger">
    Réinitialiser le buzzer
  </a-button>
</template>
<script>
export default {
  methods: {
    resetLeaderboard() {
      let firebase_data = [];
      const messageRef = this.$fire.database.ref("users");
      messageRef.on("value", (snap) => (firebase_data = snap.val()));
      const firebase_data_array = Object.entries(firebase_data);
      firebase_data_array.map((user) => {
        this.$fire.database.ref("users/" + user[1].username).set({
          username: user[1].username,
          isAdmin: user[1].isAdmin,
          buzz_time: "",
        });
      });
    },
  },
};
</script>
