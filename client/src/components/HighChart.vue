<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

      <label>Search for a stock symbol:</label>
      <input v-model='searchkey' type="text" v-on:keyup.enter.stop.prevent='submitSymbol'/>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'HighChart',
  data () {
    return {
      msg: 'Welcome to your App, Mr. Faudree',
      searchkey: ''
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
      console.log(e.target.value)
      this.socket.emit('search', JSON.stringify(e.target.value))
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
