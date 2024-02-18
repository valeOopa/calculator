import PropTypes from 'prop-types';

export function KeyComponent({k, handleKey}) {
  let keyId = k[0];
  switch (keyId) {
    case '*':
      keyId = 'Multiplication';
      break;
    case '/':
      keyId = 'Division';
      break;
    case '+':
      keyId = 'Plus';
      break;
    case '-':
      keyId = 'Minius';
      break;
    case '.':
      keyId = 'Point';
      break;
    case '=':
      keyId = 'Equal';
      break;
  } 
  return (
    <button className='keysPanel__key' id={'key'+keyId} onClick={()=>handleKey(k)} value={ k[0] } >{ k[1] }</button>
  )
}

KeyComponent.propTypes = {
  k: PropTypes.array.isRequired, // Esperamos que 'k' sea un string y que sea requerido
  handleKey: PropTypes.func.isRequired // Esperamos que 'handleKey' sea una función y que sea requerida
}