<template>
  <div class="details">
    <!-- <button @click="getEmployee">CLICK</button> -->
    <div class="options">
       <button @click="goBack">
         <svg style="width:24px;height:24px;color:rgb(8, 164, 167);" viewBox="0 0 24 24">
          <path fill="currentColor" d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" />
      </svg>
       </button>
    <span>Regresar</span>
    </div>
   
    <div class="employee-name">
      <h1>Asesor: {{nameUser}}</h1>
    </div>
    <section class="space">
     <h2>Lista de indicadores</h2>
    <Table :headers="headers" :employee="employee"/>
    <div class="options">
      <span class="dot green"></span>
      <label for="" class="text">En Objetivo</label>
      <span class="dot yellow"></span>
      <label for="" class="text">Neutro</label>
      <span class="dot red"></span>
      <label for="" class="text">Fuero del objetivo</label>
    </div>
    </section>
    
    <div class="space">
      <h2>Cuadro evolutivo</h2>
    <Evolution />
    </div>
     <div class="chart space">
      <h2>Gráfica</h2>
    <GChart 
    type="AreaChart"
    :data="chartData"
    :options="chartOptions"
    />
    </div>
  </div>
</template>

<script>
import Table from '../components/Details/Table';
import Evolution from '../components/Details/Evolution'
import { GChart } from 'vue-google-charts'


export default {
  name: 'Details',
  components: {
    Table,
    Evolution,
    GChart,
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
    employee: [(JSON.parse(localStorage.getItem('name')))],
    nameUser: (JSON.parse(localStorage.getItem('employee'))),
    chartData: [
        ['Agosto', 'Objetivo', 'Resultado grupal', 'Neutro'],
        ['semana 1', 370, 0, 300],
        ['semana 2', 300, 0, 300],
        ['semana 3', 460, 400, 300],
        ['semana 4', 530, 0, 300]
      ],
    chartOptions: {
        chart: {
          title: 'HTC',
          subtitle: 'Objetivo, Neutro, and Fuera de Objetivo',
        }}

  }),
  methods: {
    goBack (){
      localStorage.removeItem('name');
      localStorage.removeItem('employee')
      this.$router.push(`/`)
    }
  }
}
</script>


<style >
.dot {
  height: 15px;
  width: 15px;
  /* background-color: #bbb; */
  border-radius: 50%;
  display: inline-block;
  margin: 4px;
}
.options{
  display: flex;
  flex-direction: row;
  margin: 5px;
}
.employee-name{
  background-color: rgb(255, 255, 255);
  box-shadow:  3px 2.8px 2.2px rgba(0, 0, 0, 0.034);
  border: solid 3px whitesmoke;
  margin: 32px;
  border-radius: 10px;
  padding: 15px;
}
.space{
  margin: 3rem;
}

</style>