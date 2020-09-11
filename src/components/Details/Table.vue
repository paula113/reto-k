<template>
  <v-data-table
    :headers="headers"
    :items="employee"
    class="elevation-1"
  >
  <!-- <h1 content='mi prop'>hola</h1> -->
    <template v-slot:[`item.Estado`]="{ item }">
      <v-chip :color="getColor(item.Estado)" dark>{{ item.Estado }}</v-chip>
    </template>
  </v-data-table>
</template>

<script>

  export default {
    props: ['headers', 'employee'],

    data () {
      return {
       
      }
    },
    methods: {
      getColor (Estado) {
        if (Estado > 400) return 'red'
        else if (Estado > 200) return 'yellow'
        else return 'green'
      },
      newmet (){
       console.log('jjjjj');
      }
    },
  }
</script>