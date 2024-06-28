import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './ToolsGra.scss'; // Archivo de estilos
import NavBar from '../../components/NavBar/NavBar';


export default function ToolsGra() {


  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/diagnosis');

  };
  return (
    <>
      <NavBar rightChildren={<button className="back-button" onClick={handleButtonClick}>Informe</button>}/> {/* Incluimos el NavBar fuera del contenedor principal */}
      <div className='tools-gra-container'>
        <div className='company-info'>

        </div>
        <table className='tools-gra-table'>
          <thead>
            <tr>
              <th colSpan="2">ABASTECIMIENTO Y ALMACENAMIENTO</th>
            </tr>
            <tr>
              <th>Práctica</th>
              <th>Herramientas</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1.1 Verificación de las condiciones de abastecimiento</td>
              <td>
                <div className='tools-cell'>
                  <div><Link to="/vca">a. Identificación de la fuente de abastecimiento</Link></div>
                  <div><Link to="/vca">b. Verificación de programación de suspensiones</Link></div>
                </div>
              </td>
            </tr>
            <tr>
              <td>1.2 Evaluación y seguimiento de la capacidad de tanques de almacenamiento de agua</td>
              <td>
                <div className='tools-cell'>
                  <div><Link to="/esctaa">a. Estimación teórica del consumo de agua/día</Link></div>
                  <div><Link to="/esctaa">b. Evaluación de la capacidad de tanques de almacenamiento</Link></div>
                  <div><Link to="/esctaa">c. Seguimiento a la capacidad de almacenamiento</Link></div>
                  <div><Link to="/esctaa">d. Análisis a la capacidad de acometida</Link></div>
                </div>
              </td>
            </tr>
            <tr>
              <td>1.3 Mantenimiento de tanques de almacenamiento</td>
              <td>
                <div className='tools-cell'>
                  <div><Link to="/esctaa">a. Programación y ejecución de inspecciones</Link></div>
                  <div><Link to="/esctaa">b. Lista de chequeo de inspecciones de sistemas de almacenamiento</Link></div>
                  <div><Link to="/esctaa">c. Guía de limpieza y desinfección de tanques</Link></div>
                  <div><Link to="/esctaa">d. Seguimiento al cumplimiento normativo actividades de limpieza y desinfección</Link></div>
                </div>
              </td>
            </tr>
            <tr>
              <td>1.4 Control de la calidad del agua almacenada y suministrada</td>
              <td>
                <div className='tools-cell'>
                  <div><Link to="/esctaa">a. Programación análisis de calidad de agua potable</Link></div>
                  <div><Link to="/esctaa">b. Verificación acreditación de laboratorios</Link></div>
                  <div><Link to="/esctaa">c. Análisis comparativo agua suministrada vs consumida</Link></div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
