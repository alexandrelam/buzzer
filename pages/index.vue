<template>
  <html>
    <section class="content">
      <h1>Buzzer!</h1>
      <div class="wrapper">
        <img src="/buzzer/playing_games.svg" alt="playing_games" />
        <LoginForm class="login-form" />
      </div>
    </section>
  </html>
</template>

<script>
import LoginForm from "../components/LoginForm.vue";
export default {
  components: {
    LoginForm,
  },
};
</script>

<style scoped>
html {
  font-family: "Cabin";
  margin: 0;
  padding: 0;
}

.content {
  display: flex;
  flex-direction: column;
}

h1 {
  font-size: 36px;
  font-weight: 700;
  font-style: italic;
  margin: auto;
  margin-top: 20vh;
}
img {
  width: 480px;
}

.wrapper {
  display: flex;
  justify-content: center;
}
.login-form {
  margin-top: 55px;
}

@media only screen and (max-width: 800px) {
  img {
    display: none;
  }
}
@media only screen and (max-width: 400px) {
  h1 {
    margin-top: 100px;
  }
}
</style>