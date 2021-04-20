import Vue from 'vue'
import { Pie } from 'vue-chartjs'

Vue.component('PieChart', {
  extends: Pie,
  props: ['data', 'options'],
  mounted() {
    this.renderChart(this.data, this.options)
  },
})
