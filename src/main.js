import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


// 公共组件
import AppScroll from './components/AppSrcoll.vue';
import Header from './components/Header.vue';

Vue.component(AppScroll.name,AppScroll);
Vue.component(Header.name,Header);

new Vue({ 
  render: h => h(App),
  router,
  store
}).$mount('#app')
