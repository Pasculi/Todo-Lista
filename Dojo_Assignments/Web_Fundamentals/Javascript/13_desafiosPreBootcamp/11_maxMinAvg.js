
/*=============================================
=            13 Desafíos de Algoritmos        =
=============================================*/

function maxMinAvg(arr) {
     //your code here 
     var max =0;
     var min =0;
     var sum =0;
 
     for(var i=0;i<arr.length;i++){
         if(max < arr[i]){
             max = arr[i];
             
         }
   if(min > arr[i]){
             min = arr[i];
         }
         sum += arr[i];
     }
     var avg = sum/arr.length;
  var arrnew = [max, min, avg]
     return arrnew; 
 }

/*=====  Encontrar el máximo, minimo y promedio  ======*/

