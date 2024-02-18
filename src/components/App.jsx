import { useState } from "react";
import { ScreenComponent } from "./ScreenComponent";
import { KeysPanel } from "./KeysPanel";
import { KeyComponent } from "./KeyComponent";
import { validateSpecialTogglePress } from "./validateSpecialTogglePress"; 

function App() {
  //*Operación a realizar
  const [operation,setOperation] = useState('0');
  //*Operación a mostrar en pantalla(ScreenComponent)
  const [operationScreen,setOperationScreen] = useState('0');
  //*Ultima tecla presionada por el usuario
  const mathSigns = ['*','+','-','/','.'];

  //*Array con las teclas{valor para operation, valor para OpScreen}
  const keys = [['7','7'],['8','8'],['9','9'],['DEL','DEL'],['4','4'],['5','5'],['6','6'],['+','+'],['1','1'],['2','2'],['3','3'],['-','-'],['.','.'],['0','0'],['/','÷'],['*','×'],['RESET','RESET'],['=','=']];

  //*Función para agregar un caracter a la operación y actualizar la pantalla correspondiente
  const handleKey = k => {
    //*Define la tecla presioanda

    //*Validaciones

    //*Se valida si se presiono DEL, RESET o =
    const result = validateSpecialTogglePress({operation, operationScreen, k});
    if( result !== false ){
      setOperation(result[0]);
      setOperationScreen(result[1]);
    }
    else if(!(mathSigns.includes(k[0]))){
      //*Si la tecla apretada no es un signo matematico, se agrega normalmente el caracter a la operación
      setOperation((operation!=='0') ? operation + k[0] : k[0]);
      setOperationScreen((operationScreen!=='0') ? operationScreen + k[1] : k[1]);
    }
    //*En caso contrario debemos analizar...
    else {
      if(!mathSigns.includes(operation.slice(-1))){
        //* Si el último caracter antes de que se apretara el boton no es un signo, se agrega el caracter nomralmente
        setOperation(operation+k[0]);
        setOperationScreen(operationScreen+k[1]);
      }else{
        //* En caso contrario, si la letra apretada y el último caracter son un signo matematico o un ".", se reemplazara por la ultima tecla apretada
        let newOp = operation.slice(0, -1);
        setOperation(newOp+k[0]);
        let newOpSc = operationScreen.slice(0, -1);
        setOperationScreen(newOpSc+k[1]);
      }
    }
  }
  
  return (
    <div id="calculator">
      <ScreenComponent operation={operationScreen} />
      <KeysPanel>
        {keys.map((k,key) =>  <KeyComponent handleKey={handleKey} key={key} k={k} />)}
      </KeysPanel>
    </div>
    
  )
}

export default App