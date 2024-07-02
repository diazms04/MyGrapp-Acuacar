import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './UserPortal.scss';
import NavBar from '../../components/NavBar/NavBar';

// Datos para la gráfica lineal
const data = [
    { name: 'Enero', Progreso: 10 },
    { name: 'Febrero', Progreso: 30 },
    { name: 'Marzo', Progreso: 35 },
    { name: 'Abril', Progreso: 40 },
    { name: 'Mayo', Progreso: 80 },
    { name: 'Junio', Progreso: 60 },
    { name: 'Julio', Progreso: 78 },
    { name: 'Agosto', Progreso: 80 },
    { name: 'Septiembre', Progreso: 90 },
    { name: 'Octubre', Progreso: 70 },
    { name: 'Noviembre', Progreso: 90 },
    { name: 'Diciembre', Progreso: 100 },
];

// Valores predefinidos para el eje Y (porcentaje)
const valoresY = [0, 20, 40, 60, 80, 100]; // Aquí puedes ajustar los valores según tu necesidad

// Datos para la tabla
const tableData = [
    { practica: 'Practica 1', estado: 'En curso', fecha: '2024-06-01' },
    { practica: 'Practica 2', estado: 'Completado', fecha: '2024-06-15' },
    { practica: 'Practica 3', estado: 'Pendiente', fecha: '2024-06-20' }
];

function UserPortal() {
  
  // Función para formatear el valor con porcentaje
  const formatPercent = (value) => {
    return `${value}%`;
  };

  return (
    <>
      <div className='container_User_Personal'>
        
        <NavBar/>

        <div className='first_section'>
            
          <div className='AccountResume'>
        
            <div className='resume'>
              <h3>Resume </h3>
              <div>
                <p>Estado: </p>
                <p>Porcentaje: </p>
                <p>Solicitudes Pendientes:</p>
                <p>Numero de Solicitudes: </p>
              </div>
            </div>
          </div>
        
          <div className='container_charts'>
            <div className="line-chart-container">
              <LineChart className='progress_chart' 
                width={1100}
                height={300}
                data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name"  />
                <YAxis ticks={valoresY} tickFormatter={formatPercent} />
                <Tooltip formatter={formatPercent} />
                <Legend />
                <Line className='lin' type="monotone" dataKey="Progreso" stroke="#43aff3" />
              </LineChart>
            </div>
          </div>
    
        </div>
        <div>
            <div>
                <h3>Procesos Pendientes</h3>
            </div>

            <div className='tabla-container'>
              <table className='tabla-practicas'>
                <thead>
                  <tr>
                    <th>Fecha de la Solicitud</th>
                    <th>Practica</th>
                    <th>Estado</th>
                    
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row, index) => (
                    <tr key={index}>
                        <td>{row.fecha}</td>
                        <td>{row.practica}</td>
                        <td>{row.estado}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
        </div>
      </div>
    </>
  )
}

export default UserPortal;
