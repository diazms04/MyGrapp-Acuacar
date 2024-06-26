import React, { useState } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import BackButton from '../../components/BackButton/BackButton';

import './Esctaa.scss';

function Esctaa() {
  const [sector, setSector] = useState('gastronomico');
  const [inputValue, setInputValue] = useState(0);
  const [consumo, setConsumo] = useState(0);
  const [estado, setEstado] = useState('');
  const [valorE1Texto, setValorE1Texto] = useState('');
  const [estadosTabla3, setEstadosTabla3] = useState({
    fila1: { estado: '', textoEstado: '', color: 'red' },
    fila2: { estado: '', textoEstado: '', color: 'yellow' },
  });

  const sectores = [
    { value: 'gastronomico', label: 'Gastronómico', variable: 'N comidas' },
    { value: 'industrial', label: 'Industrial', variable: 'N procesos' },
    { value: 'residencial', label: 'Residencial', variable: 'N personas' },
    // Agrega más sectores según sea necesario
  ];

  const handleSectorChange = (event) => {
    setSector(event.target.value);
    setInputValue(0);
    setConsumo(0);
    setEstado('');
    setValorE1Texto('');
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const estimateConsumo = () => {
    // Realiza la estimación del consumo aquí
    // Por ejemplo, para simplificar, multiplicamos el valor de entrada por 10
    setConsumo(inputValue * 10);
  };

  const handleValor2Change = (event) => {
    const valor2 = parseInt(event.target.value);
    if (valor2 <50 ) {
      setEstado('Riesgo crítico-insatisfactorio');
      setValorE1Texto('¡ALERTA! Su sistema de almacenamiento cuenta con capacidad insuficiente para almacenar y abastecer sus actividades. Es importante que tome acciones inmediata en relación a lo siguiente.- Planifique e implemente a corto plazo los ajustes correspondientes al sistema de abastecimiento.- Verifique y proyecte su capacidad para tomar decisiones correctas en el dimensionamiento del sistema.- Refuerce de manera temporal las medidas de ahorro y consumo en su establecimiento.');
    } else {
      setEstado('Óptimo - satisfactorio');
      setValorE1Texto('¡EXCELENTE! Su capacidad de almacenamiento para abastecimiento es ideal para el abastecimiento de su actividad productiva por 24 h. Le sugerimos evaluar las condiciones y/o estado de los sistemas de almacenamiento para su correcto funcionamiento en términos de calidad.');
    }
  };

  const handleInputChangeTabla3 = (event, fila) => {
    const value = parseInt(event.target.value);

    let estadoTabla3 = '';
    let textoEstadoTabla3 = '';
    let colorTabla3 = '';

    if (value >= 1 && value <= 50) {
      estadoTabla3 = 'Riesgo crítico - insatisfactorio';
      textoEstadoTabla3 = 'Texto para riesgo crítico - insatisfactorio';
      colorTabla3 = 'red';
    } else if (value >= 51 && value <= 90) {
      estadoTabla3 = 'Riesgo medio - insatisfactorio';
      textoEstadoTabla3 = 'Texto para riesgo medio - insatisfactorio';
      colorTabla3 = 'yellow';
    } else if (value >= 91 && value <= 99) {
      estadoTabla3 = 'Buenas condiciones - satisfactorio';
      textoEstadoTabla3 = 'Texto para buenas condiciones - satisfactorio';
      colorTabla3 = 'green';
    } else if (value === 100) {
      estadoTabla3 = 'Óptimo - satisfactorio';
      textoEstadoTabla3 = 'Texto para óptimo - satisfactorio';
      colorTabla3 = 'blue';
    }

    setEstadosTabla3(prevState => ({
      ...prevState,
      [fila]: {
        estado: estadoTabla3,
        textoEstado: textoEstadoTabla3,
        color: colorTabla3,
      },
    }));
  };

  const selectedSector = sectores.find((s) => s.value === sector);

  const handleSaveToLocalStorage = () => {
    localStorage.setItem('resultadoEvaluacion', estado);
  };

  return (
    <div className="esctaa-container">
      <NavBar leftChildren={<BackButton/>}/>
      <h1>1.2 Evaluación y seguimiento de la capacidad de tanques de almacenamiento de agua</h1>
      <table className="tabla">
        <thead>
          <tr>
            <th colSpan="4">a. Estimación teórica de consumo de agua/día</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Seleccione el sector</td>
            <td>Variables</td>
            <td>Valor</td>
            <td>Unidad de medida</td>
          </tr>
          <tr>
            <td rowSpan="2">
              <select value={sector} onChange={handleSectorChange}>
                {sectores.map((s) => (
                  <option key={s.value} value={s.value}>{s.label}</option>
                ))}
              </select>
            </td>
            <td>{selectedSector.variable}</td>
            <td>
              <input type="number" value={inputValue} onChange={handleInputChange} onBlur={estimateConsumo} />
            </td>
            <td>Cantidad/dia</td>
          </tr>
          <tr>
            <td>Estimación de consumo</td>
            <td>{consumo}</td>
            <td>m3/dia</td>
          </tr>
        </tbody>
      </table>

      <table className="tabla">
        <thead>
          <tr>
            <th colSpan="3">b. Evaluación de la capacidad de tanques de almacenamiento</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="3">Para la variable de capacidad de tanques de almacenamiento, sume los volumenes de aquellos depositos disponibles en su establecimiento e inserte el resultado total en el campo valor.</td>
          </tr>
          <tr>
            <td>Variables</td>
            <td>Valor</td>
            <td>Unidad de medida</td>
          </tr>
          <tr>
            <td>Capacidad de tanques</td>
            
            <td>
              <input type="number" onChange={handleValor2Change} />
            </td>
            
            <td >m3</td>
          </tr>
          <tr>
            <td>Nivel de Capacidad</td>
            <td>Valor B</td>
           
          </tr>
        </tbody>
      </table>

      <table className="tabla">
        <tbody>
          <tr>
            <td>Resultado de Evaluación</td>
            <td>Alertas y medidas</td>
          </tr>
          <tr>
            <td style={{ color: estado === 'Óptimo - satisfactorio' ? 'blue' : 'red' }}>{estado}</td>
            <td>{valorE1Texto}</td>
          </tr>
        </tbody>
      </table>

      <table className="tabla">
        <thead>
          <tr>
            <th colSpan="4">C. Seguimiento a la capacidad de almaceamiento</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="4">Inserte el valor de nivel de capacidad estimado en el literal anterior para el año correspondiente.</td>
          </tr>
          <tr>
            <td>Año</td>
            <td>Nivel de capacidad(%)</td>
            <td>Estado de capacidad</td>
            <td>Formulación acciones acorde al resultado</td>
          </tr>
          <tr>
            <td>Valor 1</td>
            <td><input type="number" onChange={(e) => handleInputChangeTabla3(e, 'fila1')} /></td>
            <td style={{ color: estadosTabla3.fila1.color }}>{estadosTabla3.fila1.estado}</td>
            <td>{estadosTabla3.fila1.textoEstado}</td>
          </tr>
          <tr>
            <td>Valor A</td>
            <td><input type="number" onChange={(e) => handleInputChangeTabla3(e, 'fila2')} /></td>
            <td style={{ color: estadosTabla3.fila2.color }}>{estadosTabla3.fila2.estado}</td>
            <td>{estadosTabla3.fila2.textoEstado}</td>
          </tr>
        </tbody>
      </table>

      <table className="tabla">
        <thead>
          <tr>
            <th colSpan="2">d. Análisis a capacidad de acometida</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>En caso de que la acometida o diametro del ingreso sea insuficiente para su demanda, se recomienda solicitar evaluación de la capacidad de tal acometida en el siguiente enlace:</td>
            <td><a href="https://www.acuacar.com/Noticias/Mantenimientos-Red-Acueducto" target="_blank">Servicio al cliente. Solicitud conexiones https://www.acuacar.com/Servicio-al-cliente/Solicitud-Conexiones	</a></td>
          </tr>
        </tbody>
      </table>

      <table className='vca-table'>
        <thead>
          <tr>
            <th colSpan="2">Observaciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="2">
              <textarea className='observations-textarea' rows="4" placeholder="Escribe tus observaciones aquí..."></textarea>
            </td>
          </tr>
        </tbody>
      </table>

      <button className="back-button" onClick={handleSaveToLocalStorage}>Guardar Resultado de Evaluación</button>
    </div>
  );
}

export default Esctaa;
