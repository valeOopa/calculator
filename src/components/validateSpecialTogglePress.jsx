export function validateSpecialTogglePress({ operation, operationScreen, k }) {
	let operationLocalFunc = '0';
	let operationScreenLocalFunc  = '0';
	if (k[0] === 'RESET') {
		//*Si es reset se resetean los caracteres
		operationLocalFunc = '0';
		operationScreenLocalFunc = '0';
	} else if (k[0] === 'DEL') {
		//*Borrar el último digito de la operación
		let newOp = operation.slice(0, -1) || '0';
		operationLocalFunc = newOp;
		let newOpSc = operationScreen.slice(0, -1) || '0';
		operationScreenLocalFunc = newOpSc;
	} else if (k[0] === '=') {
		//*Calcular la operación y mostrarlo en pantalla
		try {
			let result = eval(operation);
			operationLocalFunc = `${result}`;
			operationScreenLocalFunc = `${result}`;
		} catch (error) {
			alert("Error: La operación no es válida");
			operationLocalFunc = '0';
			operationScreenLocalFunc = '0';
		}
	}
	else{
		return false
	}
	return [operationLocalFunc, operationScreenLocalFunc]
}


/*
if(k[0] === 'RESET') {
				//*Si es reset se resetean los caracteres
				setKeyPress(null);
				setOperation('0');
				setOperationScreen('0');
				} else if (k[0] === 'DEL'){
				//*Borrar el último digito de la operación
				let newOp = operation.slice(0,-1) || '0';
				setOperation(newOp);
				let newOpSc = operationScreen.slice(0,-1) || '0';
				setOperationScreen(newOpSc);
			} else if(k[0] === '='){
				//*Calcular la operación y mostrarlo en pantalla
				try {
					let result = eval(operation);
					setOperation(`${result}`);
					setOperationScreen(`${result}`);
				} catch (error) {
					alert("Error: La operación no es válida");
					setOperation('ERROR');
					setOperationScreen('ERROR');
				}
			}
			else {
				//*Se suma un caracter a la operación
				setOperation(keyPress?operation+k[0]:k[0]);
				setOperationScreen(keyPress?operationScreen+k[1]:k[1]);
			}
*/