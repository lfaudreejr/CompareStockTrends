<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

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
      msg: 'Welcome to your App, Mr. Faudree'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
