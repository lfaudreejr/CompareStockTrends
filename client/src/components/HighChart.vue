<template>
  <div>
    <chart></chart>
  </div>
</template>

<script>
import Chart from './Chart'

export default {
  name: 'HighChart',
  components: { Chart },
  data () {
    return {
      msg: 'Stock Trends'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
