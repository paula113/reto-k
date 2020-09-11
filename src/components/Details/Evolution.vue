<template>
  <v-data-table
    :headers="headers"
    :items="data"
    class="elevation-1"
  >
   <template v-slot:[`item.Estado`]="{ item }">
      <v-chip :color="getColor(item.semana1)" dark>{{ item }}</v-chip>
    </template>
  </v-data-table>
</template>

<script>
  export default {
    data () {
      return {
        headers: [
        {
            text: 'Nombre Indicador',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'semana 1',  value: 'semana1' },
          { text: 'cuartil 1', value: 'curtil1' },
          { text: 'semana 2',  value: 'semana2' },
          { text: 'cuartil 2', value: 'curtil2' },
          { text: 'semana 3',  value: 'semana3' },
          { text: 'cuartil 3', value: 'curtil3' },
          { text: 'semana 4',  value: 'semana4' },
          { text: 'cuartil 4', value: 'curtil4' },
        ],
        data: [
           {
        name: 'Indicator HTC',
        semana1: '65%',
        curtil1: 'Q4',
        semana2: '65%',
        curtil2: 'Q4',
        semana3: '75%',
        curtil3: 'Q4',
        semana4: '85%',
        curtil4: 'Q4',
      }
        ],
      }
    },
    methods: {
      getColor (item ) {
        if (item === '65%') return 'red'
        else if (item  !== '75%') return 'orange'
        else return 'green'
      },
    },
  }
</script>