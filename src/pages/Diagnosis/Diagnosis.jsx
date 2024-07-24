import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import { Link, useNavigate } from 'react-router-dom';
import BackButton from '../../components/BackButton/BackButton';
import './Diagnosis.scss'; // Asegúrate de crear y enlazar este archivo CSS

export default function Diagnosis() {

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/Payment');

  };


  const [resultadoEvaluacion, setResultadoEvaluacion] = useState('');

  useEffect(() => {
    const storedResultado = localStorage.getItem('resultadoEvaluacion');
    if (storedResultado) {
      setResultadoEvaluacion(storedResultado);
    }
  }, []);

  const getResultadoClass = () => {
    if (resultadoEvaluacion === 'Óptimo - satisfactorio') {
      return 'resultado-optimo';
    } else if (resultadoEvaluacion === 'Riesgo crítico-insatisfactorio') {
      return 'resultado-riesgo';
    }
    return '';
  };

  const getValoracion = () => {
    if (resultadoEvaluacion === 'Óptimo - satisfactorio') {
      return '100%';
    } else if (resultadoEvaluacion === 'Riesgo crítico-insatisfactorio') {
      return '0%';
    }
    return '';
  };

  const getAnalisisRecomendaciones = () => {
    if (resultadoEvaluacion === 'Óptimo - satisfactorio') {
      return '¡EXCELENTE! Su capacidad de almacenamiento para abastecimiento es ideal';
    } else if (resultadoEvaluacion === 'Riesgo crítico-insatisfactorio') {
      return '¡ALERTA! Su sistema de almacenamiento cuenta con capacidad insuficiente .';
    }
    return '';
  };

  return (
    <div>
      <NavBar leftChildren={<BackButton />} />
      <div className="diagnosis-container">
        <table>
          <thead>
            <tr>
              <th colSpan="7">Verificación de las condiciones de abastecimiento</th>
            </tr>
            <tr>
              <th>ELEMENTO</th>
              <th>VARIABLE</th>
              <th>RESULTADOS</th>
              <th>VALORACIÓN</th>
              <th>DIAGNOSTICO</th>
              <th>SERVICIO RECOMENDADO</th>
              <th>x</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Capacidad</td>
              <td>Evaluación y seguimiento de la capacidad de tanques de almacenamiento de agua</td>
              <td className={getResultadoClass()}>{resultadoEvaluacion}</td>
              <td>{getValoracion()}</td>
              <td>{getAnalisisRecomendaciones()}</td>
              <td>servicio</td>
              <td><input type="checkbox" id="check1" name="option1" /></td>
            </tr>
            <tr>
              <td rowSpan="2">Mantenimiento</td>
              <td>Chequeo de inspecciones de sistemas de almacenamiento</td>
              <td className={getResultadoClass()}>{resultadoEvaluacion}</td>
              <td>{getValoracion()}</td>
              <td>{getAnalisisRecomendaciones()}</td>
              <td>servicio</td>
              <td><input type="checkbox" id="check2" name="option2" /></td>
            </tr>
            <tr>
              <td>Seguimiento al cumplimiento normativo actividades de limpieza y desinfección</td>
              <td className={getResultadoClass()}>{resultadoEvaluacion}</td>
              <td>{getValoracion()}</td>
              <td>{getAnalisisRecomendaciones()}</td>
              <td>servicio</td>
              <td><input type="checkbox" id="check3" name="option3" /></td>
            </tr>
            <tr>
              <td>Control de calidad</td>
              <td>Análisis comparativo agua suministrada</td>
              <td className={getResultadoClass()}>{resultadoEvaluacion}</td>
              <td>{getValoracion()}</td>
              <td>{getAnalisisRecomendaciones()}</td>
              <td>servicio</td>
              <td><input type="checkbox" id="check4" name="option4" /></td>
            </tr>
          </tbody>
        </table>
        <button className="back-button" onClick={handleButtonClick}>Solicitar Servicios</button>

      </div>

    </div>
  );
}