import Vue from 'vue'
import RnaContactForm from './RnaContactForm.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(RnaContactForm),
}).$mount('#rna-contact-form')
