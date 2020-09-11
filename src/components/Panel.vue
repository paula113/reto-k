<template>
<div>
<h2>Panel de Indicadores</h2>
<Indicators />
<div>
<!-- <GChart 
 type="gauge"
:data="chartData"
:options="chartOptions"
/> -->
</div>

</div>

</template>

<script>
import Indicators from './Indicators'
// import { GChart } from 'vue-google-charts'

  export default {
    name: 'Panel',
    components: {
        Indicators,
        // GChart,
    },

    data: () => ({
    
    })
  } 
</script>
