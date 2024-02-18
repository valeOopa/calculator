import PropTypes from 'prop-types';

export function ScreenComponent( {operation} ) {
  return (
    <div id='calculator__screen'>
      {operation}
    </div>
  )
}

ScreenComponent.propTypes = {
    operation: PropTypes.string.isRequired // Esperamos que 'operation' sea un string y que sea requerido
};