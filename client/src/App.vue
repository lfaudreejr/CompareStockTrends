<template>
  <div id="app" class="bg-secondary">
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
    ...mapGetters([
      'getSocket'
    ])
  },
  methods: {
    ...mapActions([
      'setConnection',
      'endConnection'
    ])
  }
}
</script>

<style>
#app {
  font-family: 'Ubuntu', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 60px;
  padding-bottom: 60px;
}
</style>
