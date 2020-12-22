<template>
  <a-table :columns="columns" :data-source="data">
    <span slot="name" slot-scope="text">{{ text }}</span>
    <span slot="customTitle"><a-icon type="smile-o" /> Name</span>
  </a-table>
</template>
<script>
const columns = [
  {
    dataIndex: "username",
    key: "username",
    slots: { title: "customTitle" },
    scopedSlots: { customRender: "username" },
  },
  {
    title: "Time",
    dataIndex: "buzz_time",
    key: "buzz_time",
  },
];

export default {
  data() {
    return {
      columns,
      data: [],
    };
  },
  mounted() {
    const messageRef = this.$fire.database.ref("users");
    messageRef.on("value", (snap) => this.processData(snap));
  },
  methods: {
    processData(snap) {
      this.convert_to_data(snap);
      this.sortDate();
    },
    sortDate() {
      this.data.sort(function (a, b) {
        return a.buzz_time < b.buzz_time
          ? -1
          : a.buzz_time > b.buzz_time
          ? 1
          : 0;
      });
    },
    convert_to_data(snap) {
      this.data = [];
      const raw_data = snap.val();
      const raw_data_array = Object.entries(raw_data);

      raw_data_array.map((user, index) => {
        const new_object = {
          key: user[1].username,
          username: user[1].username,
          buzz_time: user[1].buzz_time,
        };
        this.data.push(new_object);
      });
    },
  },
};
</script>
<style scoped>
</style>