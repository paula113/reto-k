<template>
 <v-container>
   <!-- <h2>{{greetings}}</h2> -->
      <div class="employee-name">
      <h1>Hola Jimena,</h1>
    </div>
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

<style>
.employee-name{
  background-color: rgb(255, 255, 255);
  box-shadow:  3px 2.8px 2.2px rgba(0, 0, 0, 0.034);
  border: solid 3px whitesmoke;
  margin: 32px;
  border-radius: 10px;
  padding: 15px;
  color: rgb(0, 145, 255);
}

</style>
