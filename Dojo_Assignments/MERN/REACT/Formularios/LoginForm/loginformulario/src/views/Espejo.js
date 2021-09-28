import React, { Component } from 'react';
class Espejo extends Component{    
 
     render(){
         const {txt} = this.props;
         
         return(
             <div>
                 <h2>Saludos desde el componente de clase</h2>
                 <h2>{txt}</h2> 
                 
             </div>
         );
     }
 
}
 export default Espejo;