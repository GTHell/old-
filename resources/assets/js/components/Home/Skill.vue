<template>
<canvas id="my-chart"></canvas>
</template>

<script>
import Chart from "chart.js";

export default {
  name: "profile",
  data() {
    return {
      data: {
        labels: ["VueJs", "Vuex", "Vue-Router", "Webpack", "Laravel", "ReactJs", "React-Router-v4"],
        datasets: [
          {
            label: "Language Level",
            backgroundColor: [
              "#f1e05a",
              "#3572A5",
              "#4F5D95",
              "#178600",
              "#b07219",
              "#f34b7d",
              "#3572A5"
            ],
            borderColor: "rgba(0,0,0,0.5)",
            borderWidth: 0.5,
            hoverBackgroundColor: "rgba(200,200,200,0.7)",
            hoverBorderColor: "rgba(100,99,100,1)",
            data: [90, 84, 80, 86, 82, 70, 75]
          }
        ]
      },
      options: {
        scales: {
          xAxes: [
            {
              ticks: {
                beginAtZero: true,
                max: 100,
                min: 0
              }
            }
          ]
        }
      }
    };
  },
  mounted() {
    let mySkill = new Chart(
      document.getElementById("my-chart").getContext("2d"),
      {
        type: "horizontalBar",
        data: this.data,
        options: this.options
      }
    );
  }
};
</script>

<style scoped>
</style>

