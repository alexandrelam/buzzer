<script>
import { Bar } from "vue-chartjs";
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      index_question: 0,
      raw_data: [],
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
    messageRef.on("value", (snap) => {
      this.setRawData(snap.val());
      this.incrementQuestionChange();
    });
    const IndexQuestionRef = this.$fire.database.ref("index_question");
    IndexQuestionRef.on("value", (snap) => {
      this.index_question = snap.val();
    });
  },
  computed: mapState(["questionChange"]),
  watch: {
    questionChange: function (oldval, newval) {
      let dataset = [];
      let labels = [];
      this.raw_data.map((user) => {
        labels.push(user[0]);
        const answer_points_arr = Object.values(user[1].answer_points);
        dataset.push(
          this.sumArray(answer_points_arr.slice(0, this.index_question + 1))
        );
      });
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
  methods: {
    ...mapMutations({
      incrementQuestionChange: "incrementQuestionChange",
    }),
    sumArray(arr) {
      return arr.reduce((a, b) => a + b, 0);
    },
    setRawData(raw_data) {
      this.raw_data = Object.entries(raw_data);
    },
  },
};
</script>