function Pessoa({foto, nome, idade, profissao}){
    return (
        <div>
            <img src={foto} />
            <h2>{nome}</h2>
            <p>{idade}</p>
            <p>{profissao}</p>
        </div>
    )
}

export default Pessoa