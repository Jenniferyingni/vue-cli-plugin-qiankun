import Vue from 'vue';
import { registerMicroApps, setDefaultMountApp, start } from 'qiankun';
import App from './App';
import router from './router'
import {fetch as fetchPolyfill} from 'whatwg-fetch'

import './assets/css/reset.css'

Vue.config.productionTip = false

let app = null;

function render({ appContent, loading }) {
  if (!app) {
    app = new Vue({
      el: '#app',
      router,
      data() {
        return {
          content: appContent,
          loading,
        };
      },
      render(h) {
        return h(App, {
          props: {
            content: this.content,
            loading: this.loading,
          },
        });
      },
    });
  } else {
    app.content = appContent;
    app.loading = loading;
  }
}

function genActiveRule(routerPrefix) {
  return location => location.pathname.startsWith(routerPrefix);
}

function initApp() {
  render({ appContent: '', loading: true });
}

const request = (url) => {
  fetchPolyfill(url, {
    referrerPolicy: 'origin-when-cross-origin',
  })
}

initApp();


registerMicroApps(
  [
    { name: 'vue app1', entry: '//localhost:7101', render, activeRule: genActiveRule('/demo1') }
  ],
);

setDefaultMountApp('/demo1');

start({ prefetch: false, jsSandbox: false,fetch:request});

