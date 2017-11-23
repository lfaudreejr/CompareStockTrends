<template>
  <b-container fluid class="bg-dark">

    <b-row>
      <b-col class="box" sm='3' v-for="stock in getStocks" :key="stock._id">
        <div>
          <h3>{{stock.name}}<b-button-close @click="deleteStock(stock)">x</b-button-close></h3>
          <p>{{stock.desc}}</p>
        </div>
      </b-col>

      <b-col class="box" sm='3'>
        <b-form-input v-model.trim='searchkey' placeholder='Enter stock symbol' type="text" v-on:keyup.native.enter.stop.prevent='submitSymbol'/>
      </b-col>
    </b-row>

  </b-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'searchbar',
  data () {
    return {
      searchkey: null
    }
  },
  computed: {
    ...mapGetters([
      'getSocket',
      'getStocks'
    ])
  },
  methods: {
    submitSymbol (e) {
      this.searchkey = ''
      this.getSocket.emit('search', e.target.value)
    },
    deleteStock (stock) {
      this.removeStock(stock)
      this.getSocket.emit('removeStock', stock)
    },
    ...mapActions([
      'setConnection',
      'endConnection',
      'addStock',
      'removeStock'
    ])
  }
}
</script>

<style scoped>

.box {
  border: 1px solid #bbb;
  margin: 0 auto;
  border-left-width: 5px;
  background-color: #fff;
  padding: 10px;
}
.box:hover {
  border-left-color: greenyellow
}

</style>
