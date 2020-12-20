<template>
  <html>
    <head>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap"
        rel="stylesheet"
      />
    </head>
    <section class="content">
      <h1>Buzzer!</h1>
      <div class="wrapper">
        <img src="/playing_games.svg" alt="playing_games" />
        <LoginInput />
      </div>
    </section>
  </html>
</template>

<script>
import LoginInput from "../components/LoginInput.vue";
export default {
  components: {
    LoginInput,
  },
};
</script>

<style scoped>
html {
  font-family: "Cabin";
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
  margin-top: 200px;
}
img {
  width: 480px;
}

.wrapper {
  display: flex;
  justify-content: center;
}
</style>