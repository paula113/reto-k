<template>
<div>
    <h2>Resultados del equipo</h2>
    <!-- <h1 @click="()=>myProp('texto')">hola</h1> -->
    <!-- <h6>{{greetings}}</h6> -->
    <div>
        <button class="btn-report" @click="()=>downLoad(employees)">
          Generar Reporte</button>
        <!-- <input type="text" placeholder="Buscar"> -->
    </div>
    <Table :greetings="greetings" :headers="headers" :employees="employees"/>
</div>

</template>

<script>
import Table from './tables'
    const JSONToCSVConvertor = (JSONData, ReportTitle, ShowLabel) => {
    //Si JSONData no es un objecto, JSON.parse lo convertirá
    const arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;
    
    let CSV = '';    
    //Agrega El titulo del documento en execel
    
    CSV += ReportTitle + '\r\n\n';

    //Esta condicion va generar un Label/Header
    if (ShowLabel) {
        let row = "";
        
        //Este loop va extraer los label del 1er index de la array
        for (const index in arrData[0]) {
            
            //Convertirá cada valor a string y separados por coma
            row += index + ',';
        }

        row = row.slice(0, -1);
        
        //concaqueta el Label row con salto de linea
        CSV += row + '\r\n';
    }
    
    //1er loop extrae cada fila
    for (let i = 0; i < arrData.length; i++) {
        let row = "";
        
        //2do extrae cada columna y la convierte a string separados por coma
        for (let index in arrData[i]) {
            row += '"' + arrData[i][index] + '",';
        }

        row.slice(0, row.length - 1);
        
        //agrega una linea break despues de cada fila
        CSV += row + '\r\n';
    }

    if (CSV == '') {        
        alert("Invalid data");
        return;
    }   
    
    //Genera un nombre al file
    let fileName = "MyReport_";
    //Remueve los espacios blancos del titulo y los remplaza con guion bajo
    fileName += ReportTitle.replace(/ /g,"_");   
    
    //Inicializa el formato del file csv or xls
    const uri = 'data:text/csv;charset=utf-8,' + escape(CSV);
    
    // Now the little tricky part.
    // you can use either>> window.open(uri);
    // but this will not work in some browsers
    // or you will not get the correct file extension    
    
    //this trick will generate a temp <a /> tag
    const link = document.createElement("a");    
    link.href = uri;
    
    //set the visibility hidden so it will not effect on your web-layout
    link.style = "visibility:hidden";
    link.download = fileName + ".csv";
    
    //this part will append the anchor tag and remove it after automatic click
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
  export default {
    name: 'Results',
    components: {
        Table,
    },
    props: ['myProp', 'text', 'greetings', 'headers', 'employees'],
    data: () => ({}),
    methods: {

      downLoad(data){
        if (!data) {
          alert('No data')
        }else{
          JSONToCSVConvertor(data, "Resultados del equipo", true);
        }
      }
    }
  } 
</script>
<style >
.btn-report{
  background-color: orange;
  height: 2.5rem;
  margin: 16px 16px 16px 65%;
  padding: .5rem;
  border-radius: .3rem;
  font-size: 20px;
  color:white;
  text-align: center;
}
</style>