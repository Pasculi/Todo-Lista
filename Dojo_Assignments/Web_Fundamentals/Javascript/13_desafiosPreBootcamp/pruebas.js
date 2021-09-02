for(var x=2;x<5;x++){
     console.log(x)
}

var msg="codingdojo";
for(var x=6;x<msg.length+3;x++){
     console.log(x);
}

var x =10;
if(x==10){
     console.log(x)
}else{
     console.log("hello");
}

for(var x=13;x>3;x--){
     console.log(x);
     break;
}

var msg="hello!";
for(var x = 21;x > msg.length + 5; x--){
     console.log(x);
}

var msg = 'codingdojo';
for(var x = -1; x < msg.length - 2; x++){
     if(msg.length == 6){
          for (var i = 3; i < 2; i++){
               console.log(i);
          }
     }else{
          for (var i = msg.length; i > (msg.length - 1); i--){
               console.log(i);
          }
     }
}


function sum_odd(){
     var sum=0;
     for(var i=1;i<=288;i++){
          if(i%2!==0){
               sum=sum+i;
          }
     }
     return sum;

}
