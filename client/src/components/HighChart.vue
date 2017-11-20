<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <label>Search for a stock symbol:</label>
    <input v-model='searchkey' type="text" v-on:keyup.enter.stop.prevent='submitSymbol'/>
    <p>{{stocks}}</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'HighChart',
  data () {
    return {
      msg: 'Welcome to your App, Mr. Faudree',
      searchkey: null
    }
  },
  computed: {
    ...mapGetters({
      socket: 'getSocket',
      stocks: 'getStocks'
    }),
    results: function () {
      return this.inbound
    }
  },
  methods: {
    submitSymbol (e) {
      this.searchkey = ''
      this.socket.emit('search', e.target.value)
    },
    ...mapActions({
      connection: 'setConnection',
      closeConnection: 'endConnection',
      addStock: 'addStock',
      removeStock: 'removeStock'
    })
  },
  created () {
    this.connection('test') // TODO: remove if not testing
    this.socket.on('connected', (resp) => {
      if (resp) {
        this.addStock(resp)
      }
    })
    this.socket.on('disconnect', () => {
      console.log('Socket disconnected')
    })
    this.socket.on('results', (data) => {
      this.addStock(data)
    })
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
