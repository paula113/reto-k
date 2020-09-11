<template>
  <v-data-table
    :headers="headers"
    :items="employees"
    class="elevation-1"
    @click:row="newmet"
  >
  <!-- <h1 content='mi prop'>hola</h1> -->
    <template v-slot:[`item.Estado`]="{ item }">
      <v-chip :color="getColor(item.Estado)" dark>{{ item.Estado }}</v-chip>
    </template>
  </v-data-table>
</template>

<script>
  export default {
    props: ['greetings', 'headers', 'employees'],

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
      newmet (item){
        item['KPI-4']= '75%';
        item['KPI-5']= '290';
        item['KPI-6']= '60%';        
        // console.log(item.name);
        this.$router.push(`/details/${item.name}`)
         localStorage.setItem('name', JSON.stringify(item));
         localStorage.setItem('employee', JSON.stringify(item.name));
      }
    },
  }
</script>