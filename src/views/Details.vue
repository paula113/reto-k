<template>
  <div id="details">
    <h2>{{details}}</h2>
    <h2>Where I Am Details</h2>
  </div>
</template>

<script>
export default {
  name: 'Details',
  props: {
    details: String
  }
}
</script>