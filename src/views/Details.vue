<template>
  <div id="details">
    <h2>Where I Am Details</h2>
    <h2>{{details}}</h2>
    <button @click="getEmployee">CLICK</button>
    <Table :headers="headers" :employee="employee"/>
    <div>
      <h2>Cuadro evolutivo</h2>
    <Evolution />
    </div>
     <div>
      <h2>Gráfica</h2>
    
    </div>
  </div>
</template>

<script>
import Table from '../components/Details/Table';
import Evolution from '../components/Details/Evolution'

let name = JSON.parse(localStorage.getItem('name'));
if (name) {
name['KPI-4']= '75%';
name['KPI-5']= '290';
name['KPI-6']= '60%';
}

export default {
  name: 'Details',
  components: {
    Table,
    Evolution,
  },
  props: ['details', 'name'],
  data: () => ({
     headers: [
          {
            text: 'Nombre y Apellido',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Estado', value: 'Estado' },
          { text: 'KPI-1', value: 'KPI-1' },
          { text: 'KPI-2', value: 'KPI-2'},
          { text: 'KPI-3', value: 'KPI-3' },
          { text: 'KPI-4', value: 'KPI-4' },
          { text: 'KPI-5', value: 'KPI-5' },
          { text: 'KPI-6', value: 'KPI-6' },
        ],
    employee: [name],
    Eheaders: [
         
    ],
    data: [
      {
        Indicator: 'Indicator HTC',
        'semana1': '65%',
        'curtil1': 'Q4',
        'semana2': '65%',
        'curtil2': 'Q4',
        'semana3': '75%',
        'curtil3': 'Q4',
        'semana4': '85%',
        'curtil4': 'Q4',
      }
    ]
  }),
  methods: {
    getEmployee (){
      // console.log(name.name);
      // console.log(this.employee[0]);
      console.log(this.employee);
      console.log(this.data);
    }
  }
}
</script>