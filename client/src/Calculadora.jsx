import React, { useState, useEffect } from 'react';

import './calculadora.css'

import { VscDebugRestart } from 'react-icons/vsc';
import { AiFillGithub } from 'react-icons/ai'
import { RiDivideLine } from 'react-icons/ri'

const Calculadora = () => {

	const [calc, setCalc] = useState("");
	const [result, setResult] = useState("");

	const ops = ['/', '*', '+', '-', '.']

	const updateCalc = (valor) => {
		if (
			calc.length > 8
		) {
			return
		}
		if (
			ops.includes(valor) && calc === '' ||
			ops.includes(valor) && ops.includes(calc.slice(-1))
		) {
			return
		}
		setCalc(calc + valor)

		if (!ops.includes(valor)) {
			setResult(Math.round(eval(calc + valor)).toString())
		}
	}

	const calcular = () => {
		const calculo = Math.round(eval(calc)).toString()
		if (calculo < 0) {
			setCalc("Error")
			return
		}
		setCalc(calculo)
	}

	const borrarUltimo = () => {
		if (calc == '') {
			return
		}
		else {
			const valor = calc.slice(0, -1)
			setCalc(valor)
		}
	}

	return (
		<div className="calculadora_container">

			<div className="area_resultados">

				<div className="barra_info">
					<div className="info_carnet"><p className='texto_carnet'>Andres Hernandez 20053</p></div>
				</div>

				<div className="barra_resultados">
					{result
						?
						<div className="texto_operacion">({result})</div>
						:
						""}
					<div className="texto_resultado">{calc || "0"}</div>
				</div>



			</div>


			<div className="area_numerica">

				<div className="fila">

					<div className="boton parte_verde"><AiFillGithub /></div>
					<div onClick={() => {
						setCalc(prev => "")
						setResult("")
					}} className="boton parte_verde">AC</div>
					<div className="boton parte_verde">%</div>
					<div onClick={() => { updateCalc('/') }} className="boton parte_roja"><RiDivideLine /></div>

				</div>

				<div className="fila">

					<div onClick={() => { updateCalc('7') }} className="boton">7</div>
					<div onClick={() => { updateCalc('8') }} className="boton">8</div>
					<div onClick={() => { updateCalc('9') }} className="boton">9</div>
					<div onClick={() => { updateCalc('*') }} className="boton parte_roja">*</div>

				</div>

				<div className="fila">

					<div onClick={() => { updateCalc('4') }} className="boton">4</div>
					<div onClick={() => { updateCalc('5') }} className="boton">5</div>
					<div onClick={() => { updateCalc('6') }} className="boton">6</div>
					<div onClick={() => { updateCalc('-') }} className="boton parte_roja">-</div>

				</div>

				<div className="fila">

					<div onClick={() => { updateCalc('1') }} className="boton">1</div>
					<div onClick={() => { updateCalc('2') }} className="boton">2</div>
					<div onClick={() => { updateCalc('3') }} className="boton">3</div>
					<div onClick={() => { updateCalc('+') }} className="boton parte_roja">+</div>

				</div>

				<div className="fila">


					{/* Boton de rehacer */}
					<div onClick={borrarUltimo} className="boton"><VscDebugRestart /></div>

					<div onClick={() => { updateCalc('0') }} className="boton">0</div>
					<div onClick={() => { updateCalc('.') }} className="boton">.</div>

					{/* Boton de igual */}
					<div onClick={() => calcular()} className="boton parte_roja">=</div>

				</div>



			</div>
		</div>
	)
}

export default Calculadora