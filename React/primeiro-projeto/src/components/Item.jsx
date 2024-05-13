import PropTypes from 'prop-types'

function Item({marca = 'Faltou a marca', anoLancamento = 0}){
    return (
        <>
            <li>{marca} - {anoLancamento}</li>
        </>
    )
}

Item.propTypes = {
    marca: PropTypes.string.isRequired,
    anoLancamento: PropTypes.number

}

export default Item