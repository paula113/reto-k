<template>
<nav>
    <v-toolbar flatapp :color="'rgb(8, 164, 167)'">
    </v-toolbar>
      <v-navigation-drawer
      app
        v-model="drawer"
        :permanent="permanent"
        :src="bg"
        absolute
      >
        <v-list
          dense
          nav
          class="py-0"
        >
          <v-list-item two-line :class="miniVariant && 'px-0'">
            <v-list-item-avatar>
              <img src="https://randomuser.me/api/portraits/women/81.jpg">
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>Jimena Loazo</v-list-item-title>
              <v-list-item-subtitle>Líder de equipo</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <v-list-item
            v-for="item in items"
            :key="item.title"
            link
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

    <!-- </v-card> -->
</nav>
  
</template>

<script>

// import Table from '../components/tables'
  export default {
    data () {
      return {
        drawer: true,
        items: [
          { title: 'Inicio', icon: 'mdi-home' },
          { title: 'Seguimiento', icon: 'mdi-account-multiple' },
          { title: 'Calendario', icon: 'mdi-calendar-month' },
          { title: 'Notificaciones', icon: 'mdi-bell-ring' },
          { title: 'Perfil', icon: 'mdi-account' },
        ],
        right: false,
        permanent: true,
        miniVariant: false,
      }
    },
    computed: {
      bg () {
        return this.background ? 'https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg' : undefined
      },
    },
  }
</script>

