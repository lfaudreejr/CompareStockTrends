<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <div>
      <chart></chart>
    </div>

    <div>
      <label>Search for a stock symbol:</label>
      <input v-model.trim='searchkey' type="text" v-on:keyup.enter.stop.prevent='submitSymbol'/>
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Chart from './Chart'

export default {
  name: 'HighChart',
  components: { Chart },
  data () {
    return {
      msg: 'Welcome to your App, Mr. Faudree',
      searchkey: null
    }
  },
  computed: {
    ...mapGetters({
      socket: 'getSocket'
    })
  },
  methods: {
    submitSymbol (e) {
      this.searchkey = ''
      this.socket.emit('search', e.target.value)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
