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
      // When getting the date from firebase we get
      // ISO 8601.
      // 1. we convert to the right format for antd table
      // 2. we sort the iso timestamp with lexicosort
      // 3. We reformat the date to be readable
      this.convert_to_data(snap);
      this.sortDate();
      this.reformatDate();
    },
    reformatDate() {
      this.data.map((user) => {
        user.buzz_time = user.buzz_time.substr(11, 21);
      });
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
<style>
.ant-table-pagination.ant-pagination {
  display: none !important;
}
</style>