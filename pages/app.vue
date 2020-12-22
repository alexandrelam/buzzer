<template>
  <h1>{{ $store.state.name }}</h1>
</template>

<script>
export default {
  mounted: () => {
    //console.log(this.$store.state.name);
  },
  computed: {
    getName() {
      return this.$store.state.name;
    },
  },
};
</script>