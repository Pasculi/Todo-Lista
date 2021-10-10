import React, { useState } from 'react';
//import Arrays from './views/Arrays';
//import { Titulos } from './views/Titulos';
import User from './views/Usuario';


const App = () => {
  const [session, cambiaSession] = useState(true);


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
          <button onClick={() => cambiaSession(true)}>Iniciar Sesion</button>
        </div>
      }
    </>

  );
}


export default App;
