import Vue from 'vue'
import HighChart from '@/components/HighChart'

describe('HighChart.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(HighChart)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('Welcome to your App, Mr. Faudree')
  })
})
