function Form() {

    function cadastrarUsuario(e){
        e.preventDefault()
        console.log('Usuário cadastrado')
    }

    return (
    <>
      <h1>Meu cadastro</h1>
      <form onSubmit={cadastrarUsuario}>
        <div>
          <input type="text" placeholder="Digite o seu nome"></input>
        </div>
        <div>
          <input type="submit" value="Cadastrar"></input>
        </div>
      </form>
    </>
  );
}

export default Form;
