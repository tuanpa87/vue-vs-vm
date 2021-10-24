// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import firebase from 'firebase'
import App from './App'
import router from './router'
import store from '@/store'
import AppDate from '@/components/AppDate'

Vue.component('AppDate', AppDate)

Vue.config.productionTip = false

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyAI3xPaupi8hcdyiZFN9pP_z340Uzfy6DA',
  authDomain: 'playground-fln8563.firebaseapp.com',
  databaseURL: 'https://playground-fln8563-default-rtdb.firebaseio.com',
  projectId: 'playground-fln8563',
  storageBucket: 'playground-fln8563.appspot.com',
  messagingSenderId: '693158375683',
  appId: '1:693158375683:web:df0478bb4b135030d33936'
}
firebase.initializeApp(config)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
