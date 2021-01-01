<script>
import { Bar } from "vue-chartjs";

export default {
  data() {
    return {
      data: {
        labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
        datasets: [
          {
            label: "Score",
            data: [2478, 5267, 734, 784, 433],
          },
        ],
      },
      options: {
        legend: { display: false },
        title: {
          display: true,
          text: "Score",
        },
        scales: {
          yAxes: [
            {
              ticks: {
                min: 0,
              },
            },
          ],
        },
      },
    };
  },
  extends: Bar,
  mounted() {
    this.renderChart(this.data, this.options);
    const messageRef = this.$fire.database.ref("answer_points");
    messageRef.on("value", (snap) => this.parseData(snap.val()));
  },
  methods: {
    sumArray(arr) {
      return arr.reduce((a, b) => a + b, 0);
    },
    parseData(raw_data) {
      console.log("im in");
      let dataset = [];
      let labels = [];
      const raw_data_array = Object.entries(raw_data);
      console.log(raw_data_array);
      raw_data_array.map((user) => {
        labels.push(user[0]);
        dataset.push(this.sumArray(user[1].answer_points));
        console.log(
          `${user[0]}  -  score : ${this.sumArray(user[1].answer_points)}`
        );
      });
      console.log(dataset);
      let data = {
        labels: labels,
        datasets: [
          {
            label: "Score",
            data: dataset,
          },
        ],
      };
      this.data = data;
      this.renderChart(this.data, this.options);
    },
  },
};
</script>