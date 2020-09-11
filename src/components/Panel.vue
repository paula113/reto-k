<template>
<div>
<h2>Panel de Indicadores</h2>
<Indicators />
</div>

</template>

<script>
import Indicators from './Indicators'
  export default {
    name: 'Panel',
    components: {
        Indicators,
    },

    data: () => ({})
  } 
</script>
