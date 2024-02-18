import PropTypes from 'prop-types';

export function KeyComponent({k, handleKey}) {
  return (
    <button onClick={()=>handleKey(k)} value={ k[0] } >{ k[1] }</button>
  )
}

KeyComponent.propTypes = {
  k: PropTypes.array.isRequired, // Esperamos que 'k' sea un string y que sea requerido
  handleKey: PropTypes.func.isRequired // Esperamos que 'handleKey' sea una función y que sea requerida
}