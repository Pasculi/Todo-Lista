import React, { Component } from 'react';

class Home extends Component {
     const [nombre, setNombre] = props;
          
     render(){

          return(
               <div>
                    <h2>{nombre}</h2>
               </div>
          )


     }


}