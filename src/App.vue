<template>
  <v-app>
 <NavBar />
    <v-main class='mx-4'>
      <router-view/>
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
    // Home,
  },

  data: () => ({
    //
  }),
};
</script>
