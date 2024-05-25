import Button from "./evento/Button"

function Evento(){

    function meuEvento(){
        console.log('Opa, fui ativado')
    }

    function segundoEvento(){
        console.log('Ativando o segundo evento')
    }

    return (
        <>
            <Button event={meuEvento} text="Primeiro Evento"></Button>
            <Button event={segundoEvento} text="Segundo Evento"></Button>
            <button onClick={meuEvento}>Clique para disparar um evento</button>
        </>
    )
}

export default Evento