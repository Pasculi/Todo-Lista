for(var i=0; i<5;i++){   
     console.log(i);
  }
  /*Cuando i es 0 y menor a 5, se imprime 0, luego se aumenta en uno quedando en 1.
  Cuando i es 1 y menor a 5, se imprime 1, luego se aumenta en uno quedando en 2.
  Cuando i es 2 y menor a 5, se imprime 2, luego se aumenta en uno quedando en 3.
  Cuando i es 3 y menor a 5, se imprime 3, luego se aumenta en uno quedando en 4.
  Cuando i es 4 y menor a 5, se imprime 4, luego se aumenta en uno quedando en 5.
  Cuando i es 5 y no es menor a 5, por lo cual termina.
________________
i |0->1->2->3->4
  | 	
R: 0,1,2,3,4
****************************/
for(var i=0; i<5; i++)
{
   i = i + 1;  
   console.log(i);
}
/*Cuando i = 0 y 0 < 5, se le suma a i = 0 + 1 e imprime 1,
y i = 1 + 1 = 2
Cuando i = 2 y 2 < 5, se le suma a i = 2 + 1 e imprime 3,
y i = 3 + 1 = 4
Cuando i = 4 y 4 < 5, se le suma a i = 4 + 1 e imprime 5,
y i = 5 + 1 = 6 --> Lo cual no se cumple y termina.-
_______________
i|0->2->4->6
 |
R: 1,3,5

***************************/
for(var i=0; i<5; i++)
{
   i = i + 3; 
   console.log(i);
}
/*Cuando i = 0 y 0 < 5, i = 0 + 3 e imprime 3, i se incrementa en 1 quedando en 4
Cuando i = 4 y 4 < 5, i = 4 + 3 e imprime 7, i se incrementa en 1 quedando 8 
__________
i|0->4->8
 |
/*R: 3,7	
**************************/
function y(num1, num2){   
   return num1+num2;
}
console.log(y(2,3))
console.log(y(3,5))
/*
Auqí se llama a la función y(2,3) 2 + 3 = imprime 5
_____________
num1 |2
num2 |3

Auqí se llama a la función y(5,8) 5 + 8 = imprime 8
_____________
num1 |3
num2 |5

R: 5,8
***********************/
function y(num1, num2){
   console.log(num1);   


   return num1+num2;
}
console.log(y(2,3))
console.log(y(3,5))
//Aquí primero se llama a la función y con los valores (2,3) imprime num1 2 y 2 + 3 = imprime 5

//Aquí en segundo lugar se llama a la función y con los valores (3,5) imprime num1 3 y 3 + 5 = imprime 8

//R: 2,5,3,8
//***********************
a = 15;
console.log(a);			//--> imprime 15

function y(a){
   console.log(a);   
   return a;
}
b = y(10);		//--> Aqui se asigna a b el resultado de la llamada a la función con el valor 10. Ingresa el valor 10, se imprime 10, y con return se guarda el resultado de la función.-
console.log(b);		//-->Aquí se imprime el valor de b que fue gardado por return 10.-

//R: 15,10,10
//*********************

a = 15;			
console.log(a);		//--> imprime 15

function y(a){
   console.log(a);   
   return a*2;
}
b = y(10);		/*-->Aqui se asigna a b el resultado de la llamada a la función con el valor 10. Ingresa el valor 10, se imprime 10, luego en return se guarda el resultado de 10 * 2 = 20 de la función.-*/
console.log(b);		//-->Aquí se imprime el valor de b que fue gardado por return 20.-

/*R: 15,10,20
********************/