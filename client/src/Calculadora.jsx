import React from 'react'

import './calculadora.css'

import { VscDebugRestart } from 'react-icons/vsc';
import { AiFillGithub } from 'react-icons/ai'
import { RiDivideLine } from 'react-icons/ri'

const Calculadora = () => {

	const prueba = '12,936'
	const operacion = '308 x 42'

	return (
		<div className="calculadora_container">

			<div className="area_resultados">

				<div className="barra_info">
					{/* <div className="info_nombre"><p className='texto_nombre'> Andres Hernandez</p></div> */}
					<div className="info_carnet"><p className='texto_carnet'>Andres Hernandez 20053</p></div>
				</div>

				<div className="barra_resultados">
					<div className="texto_operacion">{operacion}</div>
					<div className="texto_resultado">{prueba}</div>
				</div>



			</div>


			<div className="area_numerica">

				<div className="fila">

					<div className="boton parte_verde"><AiFillGithub /></div>
					<div className="boton parte_verde">AC</div>
					<div className="boton parte_verde">%</div>
					<div className="boton parte_roja"><RiDivideLine /></div>

				</div>

				<div className="fila">

					<div className="boton">7</div>
					<div className="boton">8</div>
					<div className="boton">9</div>
					<div className="boton parte_roja">X</div>

				</div>

				<div className="fila">

					<div className="boton">4</div>
					<div className="boton">5</div>
					<div className="boton">6</div>
					<div className="boton parte_roja">-</div>

				</div>

				<div className="fila">

					<div className="boton">1</div>
					<div className="boton">2</div>
					<div className="boton">3</div>
					<div className="boton parte_roja">+</div>

				</div>

				<div className="fila">

					<div className="boton"><VscDebugRestart /></div>
					<div className="boton">0</div>
					<div className="boton">.</div>
					<div className="boton parte_roja">=</div>

				</div>



			</div>
		</div>
	)
}

export default Calculadora