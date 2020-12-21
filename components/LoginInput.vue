<template>
  <div class="inputs">
    <p>Prénom</p>
    <a-input
      v-decorator="[
        'prenom',
        { rules: [{ required: true, message: 'Rentrez un nom!' }] },
      ]"
      placeholder="Rentrez un prénom"
    />
    <a-checkbox class="checkbox" @change="onChange"> Je suis admin </a-checkbox>
    <a-button type="primary"> Go! </a-button>
  </div>
</template>

<script>
export default {
  methods: {
    onChange(e) {
      console.log("checked " + e.target.checked);
    },
  },
};
</script>

<style scoped>
.inputs {
  display: flex;
  flex-direction: column;
}
.checkbox {
  margin-top: 24px;
  font-size: 17px;
  font-weight: 700;
  font-family: "Cabin";
  color: #262626;
}
p {
  font-size: 17px;
  font-weight: bold;
  color: #262626;
}
input {
  width: 400px;
  height: 48px;
}

button {
  margin-top: 70px;
  height: 56px;
}
@media only screen and (max-width: 400px) {
  input {
    width: 300px;
  }
}
</style>