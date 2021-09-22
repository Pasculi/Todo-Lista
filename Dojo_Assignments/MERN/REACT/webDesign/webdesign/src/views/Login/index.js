import React,{ Component } from 'react';
import { ReactComponent as UsuarioLogin } from '../../img/img-login.svg';
import './styles.css'


class Login extends Component{

     state ={}

     render(){
          return(

               <div className = 'from-container'>
                  
                    <UsuarioLogin className='image-login'/>
                    <form>

                    </form>
               </div>

          );
     }

}

export default Login;