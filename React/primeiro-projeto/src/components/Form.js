import { useState } from "react";

function Form() {
  function cadastrarUsuario(e) {
    e.preventDefault();
    console.log(`Usuário ${name} foi cadastrado com a senha ${password}`);
  }

  const [name, setName] = useState('João')
  const [password, setPassword] = useState()

  return (
    <>
      <h1>Meu cadastro</h1>
      <form onSubmit={cadastrarUsuario}>
        <div>
          <input type="text" placeholder="Digite o seu nome" value={name} onChange={e => setName(e.target.value)}></input>
        </div>
        <div>
          <input type="password" placeholder="Digite a sua senha" onChange={e => setPassword(e.target.value)}></input>
        </div>
        <div>
          <input type="submit" value="Cadastrar"></input>
        </div>
      </form>
    </>
  );
}

export default Form;
