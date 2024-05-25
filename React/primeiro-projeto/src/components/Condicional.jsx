import { useState } from "react";

function Condicional() {

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e) {
        e.preventDefault()
        setUserEmail(email)
    }

    function limparEmail() {
        setUserEmail('')
    }

    return (
        <div>
            <h2>Cadastre o seu email</h2>
            <form>
                <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
                <button type="submit" onClick={enviarEmail}>Cadastrar</button>
            </form>
            {userEmail && (
                <div>
                    <div>O email do usuário é {userEmail}</div>
                    <button onClick={limparEmail}>Limpar email</button>
                </div>
            )}
        </div>
    )
}

export default Condicional;
