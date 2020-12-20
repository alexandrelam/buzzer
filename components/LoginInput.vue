<template>
  <div class="inputs">
    <p>Prénom</p>
    <a-input v-decorator="[ 'prenom', { rules: [{ required: true, message:
    'Rentrez un nom!' }], }, placeholder="Please input your name" ] />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
p {
  font-size: 17px;
  font-weight: bold;
  color: #262626;
}
input {
  width: 400px;
  height: 48px;
}
</style>