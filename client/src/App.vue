<template>
  <div id="app">
    <HighChart/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import HighChart from './components/HighChart'

export default {
  name: 'app',
  components: {
    HighChart
  },
  computed: {
    ...mapGetters({
      socket: 'getSocket'
    })
  },
  methods: {
    ...mapActions({
      connection: 'setConnection',
      closeConnection: 'endConnection'
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
