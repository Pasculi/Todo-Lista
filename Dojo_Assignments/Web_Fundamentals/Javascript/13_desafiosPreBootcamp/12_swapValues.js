
/*=============================================
=            13 Desafíos de Algoritmos        =
=============================================*/

function swap(arr) {
     //your code here 
     var arrnew=[];
     var temp=arr[0];
     if(arr.length >= 2){
         arr[0]=arr[arr.length-1];
         arr[arr.length-1]=temp;
         for(var i=0;i<arr.length;i++){
             arrnew.push(arr[i]);
             
         }
     }
     return arrnew; 
 }

/*=====  Intercambiar valores  ======*/

