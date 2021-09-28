import React, {Component} from 'react';

class PersonCard extends Component {
     
          constructor(props){
              super(props);
              this.state ={                                            
                      age:this.props.age,
                  
              };
          }
              addAge = () =>{
                   const ageMas = this.state.addAge + 1;
               this.setState({ addAge: ageMas + 1 });
          };
     render(){
          const age = this.state;
          const {primerNombre, primerApellido, colorPelo} = this.props;        
         
          return (
               <div>                
                    <h1>{primerApellido}, {primerNombre}</h1>
                    <p>Edad: {age}</p>
                    <p>Color de pelo: {colorPelo}</p>                    
                    <button onClick={this.addAge}>Birthday Button for {primerNombre} {primerApellido}</button>{''}
                    <br></br>
                    <hr></hr>
               </div>
          );
     }
}
export default PersonCard; 