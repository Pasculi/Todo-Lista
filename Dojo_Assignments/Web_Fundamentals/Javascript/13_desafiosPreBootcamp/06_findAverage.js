
/*=============================================
=     13 Desafíos de Algoritmos               =
=============================================*/

function findAvg(arr) {
     //your code here 
     var avg = 0;
     var sum=0;
     for(var i=0; i<arr.length;i++){
         sum+=arr[i];
         avg=sum/arr.length;
     }
     return avg; 
 }

/*=====  Encontrar el promedio de un arreglo        ======*/