function Lista({ items }) {
    return (
        <>
            <h3>Lista de tecnologias</h3>
            { items.length > 0 ? (
                 items.map(item => (
                    <p>{item}</p>
                ))
            ) : (
                <div>Lista vazia</div>
            ) 
            }
        </>
    )
}

export default Lista