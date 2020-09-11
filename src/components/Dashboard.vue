<template>
 <v-container>
   <!-- <h2>{{greetings}}</h2> -->
   <Panel />
   <Results :myProp='test' :greetings="greetings" :headers="headers" :employees="employees"/>
 </v-container>

</template>

<script>
import Panel from './Panel'
import Results from './Results'
  export default {
    name: 'Dashboard',
     components: {
      Panel,
      Results,
    },
    props: ['greetings', 'headers', 'employees'],
    methods: {
      test(arg){
        console.log(arg);
        
      }
},
    // data: () => ({
    //   datatoResult: 'dashboard-result'
    // }),
  }
</script>
