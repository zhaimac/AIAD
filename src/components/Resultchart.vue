<template>
	<highcharts :options="chartOptions"></highcharts>
</template>

<script>
var Highcharts = require('highcharts');
export default {
  name : "Resultchart",
  data() {
    return {
      chartOptions: {
        chart: {
          type: 'spline'
        },
        title: {
          text: 'Recommendations!'
        },
        series: [{
          data: [10, 0, 8, 2, 6, 4, 5, 5]
        }]
      },
      title: 'xxx'
    }
  },
  watch: {
    title(newValue) {
      if (newValue === '') {
        this.chartOptions.title.text = 'Entire title'
      } else {
      	this.chartOptions.title.text = newValue
      }
    }
  }
}
</script>