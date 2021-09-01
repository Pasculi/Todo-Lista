
/*=============================================
=            13 Desafíos de Algoritmos            =
=============================================*/

function noNeg(arr) {
     //your code here 
     for(var i=0;i<arr.length;i++){
         if(arr[i]< 0){
            arr[i] = 0;
         }
     }
     return arr; 
 }

/*=====  Cualquier numero negativo dentro del arreglo reemplazar por 0  ======*/

