import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import BackButton from '../../components/BackButton/BackButton';
import './Diagnosis.scss'; // Asegúrate de crear y enlazar este archivo CSS

export default function Diagnosis() {
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
      return '¡EXCELENTE! Su capacidad de almacenamiento para abastecimiento es ideal para el abastecimiento de su actividad productiva por 24 h. Le sugerimos evaluar las condiciones y/o estado de los sistemas de almacenamiento para su correcto funcionamiento en términos de calidad.';
    } else if (resultadoEvaluacion === 'Riesgo crítico-insatisfactorio') {
      return '¡ALERTA! Su sistema de almacenamiento cuenta con capacidad insuficiente para almacenar y abastecer sus actividades. Es importante que tome acciones inmediatas en relación a lo siguiente.- Planifique e implemente a corto plazo los ajustes correspondientes al sistema de abastecimiento.- Verifique y proyecte su capacidad para tomar decisiones correctas en el dimensionamiento del sistema.- Refuerce de manera temporal las medidas de ahorro y consumo en su establecimiento.';
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
              <th colSpan="5">Verificación de las condiciones de abastecimiento</th>
            </tr>
            <tr>
              <th>ELEMENTO</th>
              <th>VARIABLE</th>
              <th>RESULTADOS</th>
              <th>VALORACIÓN</th>
              <th>ANÁLISIS Y RECOMENDACIONES</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Capacidad</td>
              <td>Evaluación y seguimiento de la capacidad de tanques de almacenamiento de agua</td>
              <td className={getResultadoClass()}>{resultadoEvaluacion}</td>
              <td>{getValoracion()}</td>
              <td>{getAnalisisRecomendaciones()}</td>
            </tr>
            <tr>
              <td rowSpan="2">Mantenimiento</td>
              <td>Chequeo de inspecciones de sistemas de almacenamiento</td>
              <td className={getResultadoClass()}>{resultadoEvaluacion}</td>
              <td>{getValoracion()}</td>
              <td>{getAnalisisRecomendaciones()}</td>
            </tr>
            <tr>
              <td>Seguimiento al cumplimiento normativo actividades de limpieza y desinfección</td>
              <td className={getResultadoClass()}>{resultadoEvaluacion}</td>
              <td>{getValoracion()}</td>
              <td>{getAnalisisRecomendaciones()}</td>
            </tr>
            <tr>
              <td>Control de calidad</td>
              <td>Análisis comparativo agua suministrada</td>
              <td className={getResultadoClass()}>{resultadoEvaluacion}</td>
              <td>{getValoracion()}</td>
              <td>{getAnalisisRecomendaciones()}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}