import React, {useState} from 'react';

const App = () => {

  const[Nome, setNome] = useState('João');

  const AlterarNome = () => setNome('Joaquim Silva');

  return(
    <div>
      <p>O meu nome é {Nome}</p>
      <button onClick={() => AlterarNome()}>Alterar</button>
    </div>
  )
}

export default App;
