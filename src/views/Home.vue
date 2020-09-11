<template>
<div>
    <Dashboard  :greetings="greetings" :headers="headers" :employees="employees"/>
</div>

</template>

<script>
  import Dashboard from '../components/Dashboard'
  export default {
    name: 'Home',
    components: {
          Dashboard,
      },
      data: ()=>({
        greetings: 'Hi from parent HOME to Dashboard',
         headers: [
          {
            text: 'Nombre y Apellido',
            align: 'start',
            sortable: true,
            value: 'name',
          },
          { text: 'Estado', value: 'Estado' },
          { text: 'KPI-1', value: 'KPI-1' },
          { text: 'KPI-2', value: 'KPI-2'},
          { text: 'KPI-3', value: 'KPI-3' },
        ],
        employees: [
          {
            name: 'Juan Fajardo',
            Estado: 459,
            'KPI-1': '75%',
            'KPI-2': 280,
            'KPI-3': '60%',
          },
           {
            name: 'Jorge Valentin',
            Estado: 259,
            'KPI-1': '75%',
            'KPI-2': 280,
            'KPI-3': '70%',
          },
           {
            name: 'Ybed Delgado',
            Estado: 109,
            'KPI-1': '82%',
            'KPI-2': 280,
            'KPI-3': '87%',
          },
           {
            name: 'Joshua Amao',
            Estado: 159,
            'KPI-1': '80%',
            'KPI-2': 220,
            'KPI-3': '84%',
          },
          {
            name: 'Anais Lamas',
            Estado: 459,
            'KPI-1': '75%',
            'KPI-2': 280,
            'KPI-3': '60%',
          },
          {
            name: 'Alejandro Villegas',
            Estado: 159,
            'KPI-1': '80%',
            'KPI-2': 220,
            'KPI-3': '84%',
          },
        ],
      })
  }
</script>
