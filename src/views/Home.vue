<template>
<div>
    <h2>HOMA Page</h2>
    <Dashboard />

</div>

</template>

<script>
  import Dashboard from '../components/Dashboard'

  export default {
    name: 'Home',
    components: {
          Dashboard,
      },
  }
</script>
