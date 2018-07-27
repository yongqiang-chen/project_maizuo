// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import "./javascript/rem.js";
import "./stylesheets/main.scss";

import Vue from 'vue'
import App from './App'
import router from "./router/index.js"

Vue.config.productionTip = false

/* eslint-disable no-new */
var app = new Vue({
    el: '#app',
    components: { App },
    template: '<App/>',
    router
});