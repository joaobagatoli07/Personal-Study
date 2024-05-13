import Item from './Item';

function List() {
    return (
        <>
            <h4>Minha lista</h4>
            <ul>
                <Item marca="BMW" anoLancamento={2010}></Item>
                <Item marca="Audi" anoLancamento={2005}></Item>
            </ul>
        </>
    )
}

export default List;
