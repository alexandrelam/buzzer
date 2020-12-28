<template>
  <div class="inputs">
    <p>Prénom</p>
    <a-input
      @change="handleNameChange"
      v-decorator="[
        'prenom',
        { rules: [{ required: true, message: 'Rentrez un nom!' }] },
      ]"
      placeholder="Rentrez un prénom"
    />
    <a-checkbox class="checkbox" @change="handleCheckChange">
      Je suis admin
    </a-checkbox>
    <NuxtLink to="/app"
      ><a-button html-type="submit" @click="submitData" type="primary">
        Go!
      </a-button></NuxtLink
    >
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data: function () {
    return {
      name: "default_user",
      isAdmin: false,
    };
  },
  mounted: function () {
    const messageRef = this.$fire.database.ref("users");
  },
  methods: {
    ...mapMutations({
      setName: "setName",
      setIsAdmin: "setIsAdmin",
    }),
    handleCheckChange(e) {
      this.isAdmin = e.target.checked;
    },
    handleNameChange(e) {
      this.name = e.target.value;
    },
    submitData() {
      this.setName(this.name);
      localStorage.setItem("name", this.name);
      localStorage.setItem("isAdmin", this.isAdmin);
      this.setIsAdmin(this.isAdmin);
      this.$fire.database.ref("users/" + this.name).set({
        username: this.name,
        isAdmin: this.$store.state.isAdmin,
        buzz_time: "",
      });
      this.$fire.database.ref("answer_points/" + this.name).set({
        answer_points: Array(100).fill(0),
      });
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
a {
  margin-top: 70px;
  height: 56px;
}

button {
  width: 400px;
  height: 56px;
}

@media only screen and (max-width: 400px) {
  input {
    width: 300px;
  }
  button {
    width: 300px;
  }
}
</style>


