function Evento(){

    function meuEvento(){
        console.log('Opa, fui ativado')
    }

    return (
        <>
            <button onClick={meuEvento} >Clique para disparar um evento</button>
        </>
    )
}

export default Evento