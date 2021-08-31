
/*=============================================
=            13 Desafíos de Algoritmos           =
=============================================*/

function findMax(arr) {
     //your code here 
     var max = arr[0];
     for(var i=1;i<arr.length;i++){
         if(max < arr[i]){
             var temp = arr[i];
             max = arr[i];
             arr[i] = temp;
         }
     }
     return max; 
 }

/*=====  Encontrar el Número Maximo en el array  ======*/

