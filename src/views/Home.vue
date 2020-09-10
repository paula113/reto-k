<template>
  <div id="home">
    <h2>{{home}}</h2>
    <HelloWorld  :msg="msg"/>
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld'

export default {
  name: 'Home',
  components: {
      HelloWorld,
  },
  props: {
    home: String,
    msg: String,
  }
}
</script>