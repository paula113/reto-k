<template>
  <v-app>
 <NavBar />
    <v-main class='mx-4' >
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import NavBar from './components/navBar'
// import Home from './views/Home'

export default {
  name: 'App',
  components: {
    NavBar,
  },
  // data: (x) => ({
  //   eName: x
  //     }),
  //      mounted() {
  //   if (localStorage.getItem('name')) {
  //     try {
  //       this.eName = JSON.parse(localStorage.getItem('name'));
  //     } catch(e) {
  //       localStorage.removeItem('name');
  //     }
  //   }
  // }
};
</script>
