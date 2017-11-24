<template>
  <b-container fluid class="bg-dark">

    <b-row>
      <b-col class="box bg-light" sm='3'>
        <b-form-input v-model.trim='searchkey' placeholder='Enter stock symbol' type="text" v-on:keyup.native.enter.stop.prevent='submitSymbol'/>
        <div v-if="getLoading" class="small">
          <img src="../assets/Ellipsis.gif">
        </div>
      </b-col>

      <b-col class="box bg-light" sm='3' v-for="stock in getStocks" :key="stock._id">
        <div>
          <h3 class="text-info">{{stock.name}}<b-button-close @click="deleteStock(stock)" class="text-danger closer" >x</b-button-close></h3>
          <p>{{stock.desc}}</p>
        </div>
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
      'getStocks',
      'getLoading'
    ])
  },
  methods: {
    submitSymbol (e) {
      this.searchkey = ''
      this.getSocket.emit('search', e.target.value)
      this.loading(true)
    },
    deleteStock (stock) {
      this.getSocket.emit('removeStock', stock)
    },
    ...mapActions([
      'setConnection',
      'endConnection',
      'addStock',
      'removeStock',
      'loading'
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

.small img {
  width: 50px;
}

.closer {
  cursor: pointer;
}
</style>
