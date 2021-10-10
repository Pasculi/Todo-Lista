import React, { useState } from 'react';
import FormularioInicioSesion from './views/FormularioInicioSesion';
//import Arrays from './views/Arrays';
//import { Titulos } from './views/Titulos';
import User from './views/Usuario';


const App = () => {
  const [session, cambiaSession] = useState(false);


  return (
    <>
      {session === true ?
        <div>
          <User usuario="Jorge" />
          <button onClick={() => cambiaSession(false)}>Cerrar Sesion</button>
        </div>
        :
        <div>
          <h2>No has iniciado sesion</h2>
          <FormularioInicioSesion />
          {/*<button onClick={() => cambiaSession(true)}>Iniciar Sesion</button>*/}
        </div>
      }
    </>

  );
}


export default App;
