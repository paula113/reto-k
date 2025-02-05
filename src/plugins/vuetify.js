import '@fortawesome/fontawesome-free/css/all.css'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import Vue from 'vue';
import Vuetify from 'vuetify/lib';
// import VueGoogleCharts from 'vue-google-charts'

// Vue.use(VueGoogleCharts)
Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'mdiSvg'
    },//'md',
    theme: {
        primary:'#800080',
        success: 'green',
        info: 'black',
        error: 'red',
    }
});
