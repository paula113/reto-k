<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <Home :home="message" :msg="msg"/>
    <Details :details="appDetails"/>
    <input type="text" v-model="message" />
    <button @click="alertMessage">Alert</button>
    <div id="nav">
      <router-link to="/">HOME</router-link>
       <router-link to="/details">Details</router-link>
       <router-view></router-view>
    </div>
  </div>
</template>

<script>
// we import the "HelloWorld" Vue component from ./components/
// import HelloWorld from './components/HelloWorld.vue'
import Home from './views/Home.vue';
import Details from './views/Details.vue';

export default {
  name: 'App',
  components: { //We have to declare our imported "HelloWorld" component in the components: {} object of this component’s Vue instance
    // HelloWorld,
    Home,
    Details,
  },
  data() {
    return {
      message: 'Hello reto konecta',
      msg: 'Hello World oooh its magic you known',
      appDetails: 'appDetails'
    }
  },
  methods: {
    alertMessage () {
      alert(this.message)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
