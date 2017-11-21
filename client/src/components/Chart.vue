<template>
  <div>
    <section class="container">
      <div class="row">
        <div class="">
          <highstock :options="chartConfig"></highstock>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Vue from 'vue'
import VueHighcharts from 'vue-highcharts'
import Highcharts from 'highcharts/highstock'

Vue.use(VueHighcharts, { Highcharts })

export default {
  name: 'chart',
  data () {
    return {
      msg: 'High from chart',
      chartConfig: {
        chart: {
          marginBottom: 40,
          reflow: false,
          marginLeft: 50,
          marginRight: 20,
          height: (9 / 16 * 100) + '%'
        },
        credits: {
          enabled: false
        },
        rangeSelector: {
          selected: 4
        },
        title: {
          text: 'Historical stock data'
        },
        subtitle: {
          text: 'Enter a stock symbol to get data'
        },
        xAxis: {
          type: 'datetime'
        },
        yAxis: {
          title: {
            text: null
          },
          labels: {
            formatter: function () {
              return (this.value > 0 ? ' + ' : '') + this.value + '%'
            }
          },
          maxZoom: 0.1
        },
        legend: {
          enabled: false
        },
        plotOptions: {
          series: {
            marker: {
              enabled: false,
              states: {
                hover: {
                  enabled: true,
                  radius: 3
                }
              }
            },
            compare: 'value'
          }
        },
        tooltip: {
          pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.change}%)<br/>',
          valueDecimals: 2,
          split: true
        },
        series: []
      }
    }
  },
  methods: {
    ...mapActions({
      connection: 'setConnection',
      closeConnection: 'endConnection',
      addStock: 'addStock',
      removeStock: 'removeStock'
    }),
    loadStocks (stock) {
      this.chartConfig.series.push({
        name: stock.name,
        data: stock.data.reverse().map((current) => {
          return [(new Date(current[0])).getTime(),
            current[1]]
        })
      })
    }
  },
  computed: {
    ...mapGetters({
      socket: 'getSocket',
      stocks: 'getStocks'
    })
  },
  mounted () {
    this.connection('test') // TODO: remove if not testing
    this.socket.on('connected', (resp) => {
      if (resp) {
        this.addStock(resp)
        this.loadStocks(resp)
      }
    })
    this.socket.on('disconnect', () => {
      console.log('Socket disconnected')
    })
    this.socket.on('results', (data) => {
      this.addStock(data)
      this.loadStocks(data)
    })
  }
}
</script>

<style scoped>

</style>
